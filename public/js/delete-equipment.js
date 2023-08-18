// fe code to delete student by id

const delButton = document.getElementById('del-equip');
const delEquipmentHandler = async (event) => {
    event.preventDefault();
    const id = delButton.dataset.id;

    const response = await fetch(`/api/equipment/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
          },
    });

    if (response.ok) {
        document.location.replace('/equipment');
    } else {
        alert('Sorry, failed to delete equipment');
    }
};
delButton.addEventListener('click', delEquipmentHandler);