// FE code to add new piece of equipment

const addEquipmentBtn = document.querySelector('#new-equipment-form');

const newEquipmentHandler = async (event) => {
    event.preventDefault();
    // event.stopPropagation();

    const name = document.getElementById('new-equipment-name').value.trim();
    const price = document.getElementById('new-equipment-price').value.trim();
    const link = document.getElementById('new-equipment-link').value.trim();

    console.log('name:', name);
    console.log('price:', price);
    console.log('link:', link);

    if (name && price && link) {
        const response = await fetch('/api/equipment', {
            method: 'POST',
            body: JSON.stringify({
                asset_name: name,
                serial_num: '',
                price: price,
                link: link,
                is_checked_out: false,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log('response:', response);

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Sorry, failed to create new equipment record.');
        }
    }
};

addEquipmentBtn.addEventListener('submit', newEquipmentHandler);

