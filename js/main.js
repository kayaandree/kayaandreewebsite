/* ==========================================================================
   Kaya Kelly — Portfolio behavior
   Custom cursor, page transitions, scroll reveal, galleries, lightbox.
   ========================================================================== */

(function () {
  'use strict';

  /* ---------- helpers ---------- */

  function encodePath(path) {
    return path.split('/').map(encodeURIComponent).join('/');
  }

  function imgUrl(folder, file) {
    return encodePath(folder + '/' + file);
  }

  window.SiteUtils = { encodePath: encodePath, imgUrl: imgUrl };

  /* ---------- custom cursor ---------- */

  // Pages listed here use a themed image cursor (see --page-cursor in
  // style.css) instead of the dot + ring that follows the pointer.
  var PAGES_WITH_IMAGE_CURSOR = ['paintings.html', 'photography.html', 'info.html', 'writing.html', 'index.html', 'marketing.html'];

  function initCursor() {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (PAGES_WITH_IMAGE_CURSOR.indexOf(document.body.dataset.page) !== -1) return;

    var dot = document.createElement('div');
    dot.className = 'cursor-dot is-hidden';
    var ring = document.createElement('div');
    ring.className = 'cursor-ring is-hidden';
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    var mouseX = window.innerWidth / 2;
    var mouseY = window.innerHeight / 2;
    var ringX = mouseX;
    var ringY = mouseY;
    var hasMoved = false;

    window.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = 'translate(' + mouseX + 'px,' + mouseY + 'px) translate(-50%,-50%)';
      if (!hasMoved) {
        hasMoved = true;
        ringX = mouseX;
        ringY = mouseY;
        dot.classList.remove('is-hidden');
        ring.classList.remove('is-hidden');
      }
    });

    function raf() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = 'translate(' + ringX + 'px,' + ringY + 'px) translate(-50%,-50%)';
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    document.addEventListener('mouseover', function (e) {
      if (e.target.closest && e.target.closest('a, button, .cursor-target')) {
        ring.classList.add('is-active');
      }
    });
    document.addEventListener('mouseout', function (e) {
      if (e.target.closest && e.target.closest('a, button, .cursor-target')) {
        ring.classList.remove('is-active');
      }
    });
    document.addEventListener('mouseleave', function () {
      dot.classList.add('is-hidden');
      ring.classList.add('is-hidden');
    });
    document.addEventListener('mouseenter', function () {
      dot.classList.remove('is-hidden');
      ring.classList.remove('is-hidden');
    });
  }

  /* ---------- nav ---------- */

  function initNav() {
    document.querySelectorAll('.site-nav a').forEach(function (link) {
      if (link.getAttribute('href') === document.body.dataset.page) {
        link.classList.add('is-current');
      }
    });
  }

  /* ---------- page transitions ---------- */

  function initTransitions() {
    window.addEventListener('pageshow', function () {
      document.body.classList.remove('is-leaving');
      requestAnimationFrame(function () {
        document.body.classList.add('is-loaded');
      });
    });
    document.body.classList.add('is-loaded');

    document.addEventListener('click', function (e) {
      var link = e.target.closest && e.target.closest('a');
      if (!link) return;
      var href = link.getAttribute('href');
      if (!href || href.charAt(0) === '#') return;
      if (link.target === '_blank' || link.hasAttribute('download')) return;
      if (/^https?:\/\//i.test(href) || href.indexOf('mailto:') === 0) return;
      if (href.slice(-5) !== '.html') return;

      e.preventDefault();
      document.body.classList.add('is-leaving');
      setTimeout(function () {
        window.location.href = href;
      }, 460);
    });
  }

  /* ---------- scroll reveal ---------- */

  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
  );

  var ANIMATE_SELECTOR = '[data-animate], [data-animate-group], [data-widen]';

  function registerAnimated(root) {
    var scope = root || document;
    if (root && root.matches && root.matches(ANIMATE_SELECTOR)) {
      revealObserver.observe(root);
    }
    scope.querySelectorAll(ANIMATE_SELECTOR).forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  /* ---------- lightbox ---------- */

  var Lightbox = (function () {
    var items = [];
    var index = 0;
    var el, mediaEl, imgEl, labelEl, titleEl, mediumEl, descEl;

    function build() {
      el = document.createElement('div');
      el.className = 'lightbox';
      el.innerHTML =
        '<button class="lightbox-close cursor-target"><span class="txt">Close</span><span class="x">&times;</span></button>' +
        '<button class="lightbox-nav lightbox-prev cursor-target">&#8249;</button>' +
        '<button class="lightbox-nav lightbox-next cursor-target">&#8250;</button>' +
        '<div class="lightbox-inner">' +
        '  <div class="lightbox-media"><img alt=""></div>' +
        '  <div class="lightbox-caption">' +
        '    <span class="label lb-label"></span>' +
        '    <h3 class="lb-title"></h3>' +
        '    <span class="painting-medium lb-medium"></span>' +
        '    <p class="lb-desc"></p>' +
        '  </div>' +
        '</div>';
      document.body.appendChild(el);

      mediaEl = el.querySelector('.lightbox-media');
      imgEl = el.querySelector('.lightbox-media img');
      labelEl = el.querySelector('.lb-label');
      titleEl = el.querySelector('.lb-title');
      mediumEl = el.querySelector('.lb-medium');
      descEl = el.querySelector('.lb-desc');

      el.querySelector('.lightbox-close').addEventListener('click', close);
      el.querySelector('.lightbox-prev').addEventListener('click', function () { nav(-1); });
      el.querySelector('.lightbox-next').addEventListener('click', function () { nav(1); });
      el.addEventListener('click', function (e) {
        if (e.target === el) close();
      });
      document.addEventListener('keydown', function (e) {
        if (!el.classList.contains('is-open')) return;
        if (e.key === 'Escape') close();
        if (e.key === 'ArrowRight') nav(1);
        if (e.key === 'ArrowLeft') nav(-1);
      });
    }

    function render() {
      var item = items[index];
      imgEl.src = item.src;
      imgEl.alt = item.title || '';
      labelEl.textContent = item.label || (index + 1) + ' / ' + items.length;
      titleEl.textContent = item.title || '';
      titleEl.style.display = item.title ? '' : 'none';
      mediumEl.textContent = item.medium || '';
      mediumEl.style.display = item.medium ? '' : 'none';
      descEl.textContent = item.desc || '';
      descEl.style.display = item.desc ? '' : 'none';

      var multi = items.length > 1;
      el.querySelector('.lightbox-prev').style.display = multi ? '' : 'none';
      el.querySelector('.lightbox-next').style.display = multi ? '' : 'none';
    }

    function nav(dir) {
      index = (index + dir + items.length) % items.length;
      render();
    }

    function open(list, startIndex) {
      if (!el) build();
      items = list;
      index = startIndex || 0;
      render();
      el.classList.add('is-open');
      document.documentElement.style.overflow = 'hidden';
    }

    function close() {
      if (!el) return;
      el.classList.remove('is-open');
      document.documentElement.style.overflow = '';
    }

    return { open: open, close: close };
  })();

  window.Lightbox = Lightbox;

  /* ---------- gallery renderer ---------- */

  function renderGallery(container, items, options) {
    options = options || {};
    if (!container) return;
    container.setAttribute('data-animate-group', '');

    items.forEach(function (item, i) {
      var fig = document.createElement('div');
      fig.className = 'gallery-item cursor-target';

      var img = document.createElement('img');
      img.src = item.src;
      img.alt = item.title || '';
      img.loading = 'lazy';
      img.decoding = 'async';
      fig.appendChild(img);

      if (item.title || options.showOverlay) {
        var overlay = document.createElement('div');
        overlay.className = 'gallery-item-overlay';
        overlay.innerHTML = '<span>' + (item.title || '') + '</span>';
        fig.appendChild(overlay);
      }

      fig.addEventListener('click', function () {
        Lightbox.open(
          items.map(function (it) {
            return { src: it.src, title: it.title, label: it.label };
          }),
          i
        );
      });

      container.appendChild(fig);
    });

    registerAnimated(container);
  }

  function renderPaintings(container, paintings, folder) {
    if (!container) return;
    var lightboxItems = paintings.map(function (p) {
      return {
        src: imgUrl(folder, p.file),
        title: p.name,
        medium: p.medium,
        desc: p.desc
      };
    });

    paintings.forEach(function (p, i) {
      var card = document.createElement('article');
      card.className = 'painting-card cursor-target' +
        (p.fullWidth ? ' painting-card--full' : '') +
        (p.shrink ? ' painting-card--shrink' : '') +
        (p.cropTop ? ' painting-card--crop-top' : '') +
        (p.alignEnd ? ' painting-card--align-end' : '') +
        (p.smaller ? ' painting-card--smaller' : '') +
        (p.bigger ? ' painting-card--bigger' : '') +
        (p.wideText ? ' painting-card--wide-text' : '') +
        (p.sideBySide ? ' painting-card--side-by-side' : '') +
        (p.imgBigger ? ' painting-card--img-bigger' : '') +
        (p.imgMuchBigger ? ' painting-card--img-much-bigger' : '');
      card.setAttribute('data-animate', 'fade');

      var src = imgUrl(folder, p.file);

      card.innerHTML =
        '<figure><img src="' + src + '" alt="' + p.name + '" loading="lazy" decoding="async"></figure>' +
        '<figcaption>' +
        '  <h3>' + p.name + '</h3>' +
        (p.medium ? '<span class="painting-medium">' + p.medium + '</span>' : '') +
        (p.desc ? '<p class="painting-desc">' + p.desc + '</p>' : '') +
        '</figcaption>';

      card.addEventListener('click', function () {
        Lightbox.open(lightboxItems, i);
      });

      container.appendChild(card);
      registerAnimated(card);
    });
  }

  /* ---------- bespoke collage layout ----------
     rows: array of rows; each row is an array of cells; a cell is either a
     filename (single photo), an array of filenames (stacked vertically), or
     an object { toggle: [fileA, fileB], intervalMs, hoverIndex } — both
     photos share one frame and swap instantly (no transition) on a timer
     (default 3000ms), or on hover, which locks to hoverIndex (default 1).
     Every cell in a row is sized to share the exact same rendered height,
     accounting for the real gap pixels between stacked photos, so edges
     line up exactly with no cropping and no distortion. Recomputes on
     resize since the gap-per-height relationship isn't scale-invariant. */

  function initToggleCell(imgEls, cellEl, intervalMs, hoverIndex) {
    var activeIndex = 0;
    var timer = null;

    function setActive(i) {
      activeIndex = i;
      imgEls.forEach(function (im, idx) {
        im.classList.toggle('is-active', idx === activeIndex);
      });
    }

    function startAuto() {
      stopAuto();
      timer = setInterval(function () {
        setActive((activeIndex + 1) % imgEls.length);
      }, intervalMs);
    }
    function stopAuto() {
      if (timer) clearInterval(timer);
      timer = null;
    }

    startAuto();

    cellEl.addEventListener('mouseenter', function () {
      stopAuto();
      setActive(hoverIndex);
    });
    cellEl.addEventListener('mouseleave', startAuto);
  }

  function renderCollage(container, folder, rows) {
    if (!container) return;
    container.classList.add('collage');

    function cellFiles(cell) {
      if (cell && typeof cell === 'object' && !Array.isArray(cell)) {
        if (cell.toggle) return cell.toggle;
        if (cell.file) return [cell.file];
      }
      return Array.isArray(cell) ? cell : [cell];
    }

    var flatItems = [];
    rows.forEach(function (row) {
      row.forEach(function (cell) {
        cellFiles(cell).forEach(function (file) {
          flatItems.push({ src: imgUrl(folder, file), title: '' });
        });
      });
    });

    var nextIndex = 0;
    var rowMetas = [];

    rows.forEach(function (row) {
      var rowEl = document.createElement('div');
      rowEl.className = 'collage-row';
      container.appendChild(rowEl);

      var rowMeta = { el: rowEl, cells: [] };
      rowMetas.push(rowMeta);

      row.forEach(function (cell) {
        var isObjCell = cell && typeof cell === 'object' && !Array.isArray(cell);
        var isToggle = isObjCell && !!cell.toggle;
        var zoom = isObjCell && cell.zoom ? cell.zoom : null;
        var files = cellFiles(cell);
        var cellEl = document.createElement('div');
        cellEl.className = 'collage-cell cursor-target' +
          (isToggle ? ' collage-toggle' : (files.length > 1 ? ' collage-stack' : '')) +
          (zoom ? ' collage-cell--zoom' : '');
        if (zoom) cellEl.style.setProperty('--zoom', zoom);
        rowEl.appendChild(cellEl);

        var cellMeta = { el: cellEl, images: [] };
        rowMeta.cells.push(cellMeta);

        // A toggle cell is one visual frame shared by all its photos, so it
        // only counts once toward the row's height math.
        var toggleImgMeta = isToggle ? { ratio: 1 } : null;
        if (isToggle) cellMeta.images.push(toggleImgMeta);

        var toggleImgEls = [];

        files.forEach(function (file, fileIndex) {
          var img = document.createElement('img');
          var itemIndex = nextIndex++;
          var imgMeta = isToggle ? toggleImgMeta : { ratio: 1 };
          if (!isToggle) cellMeta.images.push(imgMeta);

          img.alt = '';
          img.decoding = 'async';
          img.addEventListener('click', function () {
            Lightbox.open(flatItems, itemIndex);
          });
          img.onload = function () {
            // For toggle cells, the frame's shape is locked to the first
            // (primary) photo, since the two toggled photos may not share
            // the same aspect ratio and the frame can't change shape mid-toggle.
            if (!isToggle || fileIndex === 0) {
              imgMeta.ratio = img.naturalWidth / img.naturalHeight;
              if (isToggle) cellEl.style.aspectRatio = String(imgMeta.ratio);
            }
            scheduleLayout();
          };
          img.onerror = scheduleLayout;
          img.src = imgUrl(folder, file);
          cellEl.appendChild(img);

          if (isToggle) {
            if (fileIndex === 0) img.classList.add('is-active');
            toggleImgEls.push(img);
          }
        });

        if (isToggle) {
          initToggleCell(toggleImgEls, cellEl, cell.intervalMs || 3000, cell.hoverIndex != null ? cell.hoverIndex : 1);
        }
      });

      registerAnimated(rowEl);
    });

    var layoutQueued = false;
    function scheduleLayout() {
      if (layoutQueued) return;
      layoutQueued = true;
      requestAnimationFrame(function () {
        layoutQueued = false;
        rowMetas.forEach(layoutRow);
      });
    }

    function layoutRow(rowMeta) {
      var n = rowMeta.cells.length;
      if (!n) return;
      var hGap = parseFloat(getComputedStyle(rowMeta.el).columnGap) || 0;
      var availW = rowMeta.el.clientWidth - (n - 1) * hGap;
      if (availW <= 0) return;

      var kSum = 0;
      var gapSum = 0;
      var cellCalc = rowMeta.cells.map(function (cell) {
        var k = cell.images.reduce(function (sum, im) { return sum + 1 / im.ratio; }, 0);
        var vGap = cell.images.length > 1 ? parseFloat(getComputedStyle(cell.el).rowGap) || 0 : 0;
        kSum += 1 / k;
        gapSum += ((cell.images.length - 1) * vGap) / k;
        return { k: k, vGap: vGap, count: cell.images.length };
      });

      var targetHeight = (availW + gapSum) / kSum;

      rowMeta.el.style.display = 'flex';
      rowMeta.cells.forEach(function (cell, i) {
        var calc = cellCalc[i];
        var width = (targetHeight - (calc.count - 1) * calc.vGap) / calc.k;
        cell.el.style.flex = '0 0 ' + Math.max(width, 0) + 'px';
      });
    }

    window.addEventListener('resize', scheduleLayout);
  }

  window.Gallery = { render: renderGallery, renderPaintings: renderPaintings, renderCollage: renderCollage };

  /* ---------- hydrate curated <img data-folder data-file> tags ---------- */

  function hydrateImages(root) {
    (root || document).querySelectorAll('img[data-file]').forEach(function (img) {
      img.src = imgUrl(img.dataset.folder, img.dataset.file);
      if (!img.hasAttribute('loading')) img.loading = 'lazy';
      img.decoding = 'async';
    });
  }

  window.SiteUtils.hydrateImages = hydrateImages;

  /* ---------- init ---------- */

  document.addEventListener('DOMContentLoaded', function () {
    initCursor();
    initNav();
    initTransitions();
    hydrateImages();
    registerAnimated();
  });
})();
