export default {
	on_dropdown_select: () => {
		dropdownselection.run()
		storeValue('curr_user', userdropdown.selectedOptionValue, false)
		storeValue('first_name', userdropdown.selectedOptionLabel.split(" ")[0], false)
		storeValue('last_name', userdropdown.selectedOptionLabel.split(" ")[1], false)
	},
	on_create:()=>{
		resetWidget("Form1")
	},
	on_create_init:()=>{
		removeValue('curr-user')
		removeValue('first_name')
		removeValue('last_name')
		create_user.run()
		storeValue('curr_user', null, false)
		storeValue('first_name', "", false)
		storeValue('last_name', "", false)
		user_functions.on_create()
	}
}