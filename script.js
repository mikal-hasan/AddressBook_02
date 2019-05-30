class Contact {
    constructor(name, email, phone, relation){
        this.name=name;
        this.email=email;
        this.phone=phone;
        this.relation=relation;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [
            new Contact("Mikal", "info@mikalhasan.com", "313-555-2093", "hubby"), 
            new Contact( "Katrina", "mister_mrs@yahoo.com", "248-555-8558", "wifey"),
            new Contact("Einstien", "ein@thestein.me", "299-792-4580", "hero"),
            new Contact("Jenny", "jenny@neverforget.com", "313-555-5309", "friend"),
            new Contact("Euler P", "leonhard@euler.net", "271-828-1828", "hero"),
        ];

    }
        
    add(info) {
        let newContact = new Contact(info.name, info.email, info.phone, info.relation);
        this.contacts.push(newContact);
    }

    deleteAt(index) {
        this.contact.splice(index, 1);
        address.display();
    }
   
    display(){
        const contactList=
        document.getElementById("contact-list");
        contactList.innerHTML = ``;
        
         let count = 0;
         for (let contact of this.contacts){
         const newEntry = document.createElement("section");
         newEntry.setAttribute("data-index", count)
         newEntry.classList.add("contact-box")
         newEntry.innerHTML=`   
             <ul class="contact-box">
             <li>${contact.name}</li>
             <li>${contact.email}</li>
             <li>${contact.phone}</li>
             <li>${contact.relation}</li>
             </ul>
             <i class="material-icons">delete</i>`;
        document.querySelector("footer").appendChild(newEntry);
        count++;
        }

                
        const trashArray= document.getElementById("contact-list");
         for (let index = 0; index < trashArray.length; index++) {
             materialIcons[index].addEventListener("click", () => {
             address.deleteAt(index);
             });
        }
    }

}

let address = new AddressBook();
address.display();