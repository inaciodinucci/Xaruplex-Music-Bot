module.exports = async (interaction, client, handler) => {
    if (interaction.isAutocomplete()) {
        const command = client.commands.get(interaction.commandName);
        try {
            await command.autocompleteRun(interaction, client);
        } catch (error) {
            if (error.code === 10062) {
                return;
            }
            console.log(`Erro ao completar: ${error}`);   
            return;  
           }
    } else {
        return;
    }
}