// JS Goes here - ES6 supported
const mySiema = new Siema({
  selector: '.gallery-carousel',
  duration: 200,
  easing: 'ease',
  perPage: 1,
  startIndex: 0,
  draggable: true,
  threshold: 20,
  loop: true
});

document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.next').addEventListener('click', () => mySiema.next());

const exampleServiceUsers = {
    "staff-user": {
        "phone": "whatsapp:+441618507453",
        "name": "Jane Bloggs"
    },
    "service-users": {
        "whatsapp:+447796471999": {
            "name": "Joe or Mary",
            "phone": "whatsapp:+447796471999",
            "messages": [
                {
                    "from": "whatsapp:+447796471999",
                    "to": "whatsapp:+441618507453",
                    "text": "A new message"
                },
                {
                    "from": "whatsapp:+447796471999",
                    "to": "whatsapp:+441618507453",
                    "text": "A test message"
                }
            ]
        }
    }
};

const exampleMessage = {
    "name": "",
    "phone": "whatsapp:+447796471999",
    "messages": [
        {
            "from": "whatsapp:+447796471999",
            "to": "whatsapp:+441618507453",
            "text": "A new message"
        }
    ]
};
