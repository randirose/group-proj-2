// front end for when equipment is checked in from a student

const checkinBtns = document.querySelectorAll('.checkin-btn');

console.log('checkinBtns:', checkinBtns);

const checkinHandler = async (event) => {
    event.preventDefault();

    const checkin = {
        student_id: document.getElementById('checkoutBtn').dataset.id,
        equipment_id: event.target.dataset.id,
    };

    console.log('checkin:', checkin);

    const response = await fetch(`/api/student/checkin/${checkin.student_id}`,
        {
            method: 'DELETE',
            body: JSON.stringify({
                student_id: checkin.student_id,
                equipment_id: checkin.equipment_id,
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

    const equipmentResponse = await fetch(`/api/equipment/${checkin.equipment_id}`,
        {
            method: 'PUT',
            body: JSON.stringify({
                is_checked_out: false,
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

    if (response.ok && equipmentResponse.ok) {
        document.location.reload();
    } else {
        alert('Sorry, failed to check in equipment');
    }
};

checkinBtns.forEach((button) => {
    button.addEventListener('click', checkinHandler);
});