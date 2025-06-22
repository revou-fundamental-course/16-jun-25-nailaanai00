document.addEventListener('DOMContentLoaded', function () {
  // Ambil semua tab-menu di semua section
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
});