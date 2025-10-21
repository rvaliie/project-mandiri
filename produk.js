document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Fungsi Lihat Detail
    document.querySelectorAll('.detail-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const card = this.closest('.prod-card');
        const img = card.querySelector('img').src;
        const title = card.querySelector('h5').textContent;
        const price = card.querySelector('.price').textContent;
        const desc = card.querySelector('.text-muted.small').textContent;

        document.getElementById('detailImg').src = img;
        document.getElementById('detailTitle').textContent = title;
        document.getElementById('detailPrice').textContent = price;
        document.getElementById('detailDesc').textContent = desc;
        
        document.getElementById('detailBox').style.display = 'block';
        document.getElementById('detailBox').scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    });

    // Tutup Detail
    document.getElementById('closeDetail').addEventListener('click', function() {
      document.getElementById('detailBox').style.display = 'none';
    });

    // Fungsi Tambah Keranjang
    let cartCount = 0;
    document.querySelectorAll('.add-cart-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const card = this.closest('.prod-card');
        const title = card.querySelector('h5').textContent;
        cartCount++;
        
        alert(`✓ ${title} berhasil ditambahkan ke keranjang!\n\nTotal item: ${cartCount}`);
      });
    });