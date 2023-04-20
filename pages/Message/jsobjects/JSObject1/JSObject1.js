export default {
	update_state: () => {
		get_conversation.run()
		resetWidget("Table1", true)
	},
	clear_textbox: () => {
		resetWidget("text_box", true)
	},
	on_message_send: () => {
		JSObject1.clear_textbox()
		JSObject1.update_state()
	}
}