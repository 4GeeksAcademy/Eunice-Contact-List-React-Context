
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Contacts: [
				{
					id: "1",
					name: "Eunice Hidalgo",
					email: "eunice_05@hotmail.com",
					phone: "(+506)88528900",
					address: "San Pedro"
				},
				{
					id: "2",
					name: "Stefany Méndez",
					email: "tefis15@gmail.com",
					phone: "(+506)85984225",
					address: "Zarcero"
				}
			],
			newContact: {
				name: "",
				email: "",
				phone: "",
				address: ""
			}
		},

		actions: {
			// Use getActions to call a function within a fuction
			getContacts: () => {
				return getStore().Contacts;
			},

			createContact: (newContact) => {
				const store = getStore();
				const updatedContacts = [...store.Contacts, newContact];
				setStore({ Contacts: updatedContacts });
			},

			updateContact: (updatedContact) => {
				const store = getStore();
				const updatedContacts = store.Contacts.map((contact) =>
					contact.id === updatedContact.id ? updatedContact : contact
				);
				setStore({ Contacts: updatedContacts });
			},

			deleteContact: (contactId) => {
				const store = getStore();
				const updatedContacts = store.Contacts.filter((contact) =>
					contact.id !== contactId
				);
				setStore({ Contacts: updatedContacts });
			},
		}
	};
};


export default (getState);
