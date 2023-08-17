// front end for when equipment is checked out to a student

const checkoutBtn = document.getElementById('checkoutBtn');

const newCheckoutHandler = async (event) => {
    event.preventDefault();

    const checkout = {
        equipment_id: document.getElementById('inputCheckout').value.trim(),
        student_id: checkoutBtn.dataset.id,
    };

    console.log('checkout:', checkout);

    const response = await fetch(`/api/student/checkout/${checkout.student_id}`,
        {
            method: 'PUT',
            body: JSON.stringify(checkout),
            headers: {
                'Content-Type': 'application/json',
            }
        });

    const equipmentResponse = await fetch(`/api/equipment/${checkout.equipment_id}`,
        {
            method: 'PUT',
            body: JSON.stringify({
                is_checked_out: true
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

    if (response.ok && equipmentResponse.ok) {
        document.location.reload();
    } else {
        alert('Sorry, failed to checkout equipment');
    }
};

checkoutBtn.addEventListener('click', newCheckoutHandler);