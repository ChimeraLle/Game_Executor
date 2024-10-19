const apiUrl = "https://<kullanıcı_adı>.github.io/<repository_adı>/api/items.json"; // API URL'sini güncelle

document.getElementById('addItem').addEventListener('click', async () => {
    const newItemName = document.getElementById('newItemName').value;

    // Yeni öğeyi eklemek için POST isteği yap
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: newItemName })
    });

    if (response.ok) {
        alert('Öğe eklendi!');
        document.getElementById('newItemName').value = '';
        getItems(); // Öğeleri güncelle
    } else {
        alert('Bir hata oluştu.');
    }
});

// Öğeleri almak için GET isteği
async function getItems() {
    const response = await fetch(apiUrl);
    const items = await response.json();

    const itemsList = document.getElementById('itemsList');
    itemsList.innerHTML = ''; // Önceki öğeleri temizle

    items.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item.name;
        itemsList.appendChild(div);
    });
}

// Sayfa yüklendiğinde öğeleri al
getItems();
