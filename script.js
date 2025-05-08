
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.waste-card').forEach(card => {
    card.addEventListener('click', () => {
      let wasteType = card.getAttribute('data-type');
      if (!wasteType) {
        const titleElement = card.querySelector('h5');
        wasteType = titleElement ? titleElement.textContent.trim() : 'unknown';
      }

      // إزالة التأثير من كل الصور أولًا
      document.querySelectorAll('.waste-img').forEach(img => {
        img.classList.remove('clicked');
      });

      // إضافة التأثير فقط على صورة البطاقة المضغوطة
      const img = card.querySelector('.waste-img');
      if (img) img.classList.add('clicked');

      console.log("المستخدم اختار:", wasteType);
      localStorage.setItem("selectedWaste", wasteType);
    });
  });
});

