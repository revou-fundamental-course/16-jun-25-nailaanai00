document.addEventListener('DOMContentLoaded', function () {
  const allTabMenus = document.querySelectorAll('.tab-menu');

  allTabMenus.forEach(menu => {
    const buttons = menu.querySelectorAll('button');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        const container = menu.parentElement; // parent <section> atau wrapper
        const allTabs = container.querySelectorAll('.tab-content');
        const allButtons = menu.querySelectorAll('button');

        // Sembunyikan semua konten dan nonaktifkan tombol
        allTabs.forEach(tab => tab.style.display = 'none');
        allButtons.forEach(btn => btn.classList.remove('active'));

        // Aktifkan konten dan tombol yang diklik
        const targetContent = container.querySelector(`#${tabId}`);
        if (targetContent) {
          targetContent.style.display = 'block';
        }
        button.classList.add('active');
      });
    });
  });

  // Aktifkan tab default untuk setiap section
  document.querySelector('[data-tab="luas-segitiga"]')?.click();
  document.querySelector('[data-tab="luas-jajargenjang"]')?.click();


   // event reset form
  document.getElementById('luas-segitiga-form')?.addEventListener('reset', function () {
    document.getElementById('hasil-luas-segitiga').textContent = '';
  });
  document.getElementById('keliling-segitiga-form')?.addEventListener('reset', function () {
    document.getElementById('hasil-keliling-segitiga').textContent = '';
  });
  document.getElementById('luas-jajargenjang-form')?.addEventListener('reset', function () {
    document.getElementById('hasil-luas-jajargenjang').textContent = '';
  });
  document.getElementById('keliling-jajargenjang-form')?.addEventListener('reset', function () {
    document.getElementById('hasil-keliling-jajargenjang').textContent = '';
  });
});

//mengaktifkan button hitung luas segitiga
document.getElementById('hitung-luas-segitiga').addEventListener('click', hitungLuasSegitiga);
document.getElementById('hitung-keliling-segitiga').addEventListener('click', hitungKelilingSegitiga);
document.getElementById('hitung-luas-jajargenjang').addEventListener('click', hitungLuasJajargrnjang);
document.getElementById('hitung-keliling-jajargenjang').addEventListener('click', hitungKelilingJajargenjang);




// fungsi untuk menghitung luas segitiga
function hitungLuasSegitiga() {
  const alas = parseFloat(document.getElementById('alas-segitiga').value);
  const tinggi = parseFloat(document.getElementById('tinggi-segitiga').value);
  if (isNaN(alas) || isNaN(tinggi)) {
    alert('Masukkan nilai yang valid untuk alas dan tinggi.');
    return;
  }
  const luas = (alas * tinggi) / 2;
  document.getElementById('hasil-luas-segitiga').textContent = `Luas Segitiga: ${luas} cm²`;
}

// fungsi untuk menghitung keliling segitiga
function hitungKelilingSegitiga() {
  const sisiA = parseFloat(document.getElementById('sisi-a').value);
  const sisiB = parseFloat(document.getElementById('sisi-b').value);
  const sisiC = parseFloat(document.getElementById('sisi-c').value);
  if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
    alert('Masukkan nilai yang valid untuk semua sisi.');
    return;
  }
  const keliling = sisiA + sisiB + sisiC;
  document.getElementById('hasil-keliling-segitiga').textContent = `Keliling Segitiga: ${keliling} cm`;
}

// fungsi untuk menghitung luas jajargenjang
function hitungLuasJajargrnjang() {
  const alas = parseFloat(document.getElementById('alas-jajargenjang').value);
  const tinggi = parseFloat(document.getElementById('tinggi-jajargenjang').value);
  if (isNaN(alas) || isNaN(tinggi)) {
    alert('Masukkan nilai yang valid untuk alas dan tinggi.');
    return;
  }
  const luas = alas * tinggi;
  document.getElementById('hasil-luas-jajargenjang').textContent = `Luas Jajargenjang: ${luas} cm²`;
}

// fungsi untuk menghitung keliling jajargenjang
function hitungKelilingJajargenjang() {
  const sisiA = parseFloat(documentById('sisi-a-jajargenjang').value);
  const sisiB = parseFloat(document.getElementById('sisi-b-jajargenjang').value);
  if (isNaN(sisiA) || isNaN(sisiB)) {
    alert('Masukkan nilai yang valid untuk kedua sisi.');
    return;
  }
  const keliling = 2 * (sisiA + sisiB);
  document.getElementById('hasil-keliling-jajargenjang').textContent = `Keliling Jajargenjang: ${keliling} cm`;
}