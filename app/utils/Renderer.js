Ext.define('Techno.util.Renderer', {
    singleton: true,  // Singleton pattern
    alternateClassName: 'Renderer',  // Alternate class name for easier access


    Orderers: {
        'processing': 'inProgress',
        'Commande_a_livrer': 'inProgress',
        'pending': 'pending',
        'Commande_a_recuperer': 'pending',
        'completed': 'delivered',
        'canceled': 'canceled',
        'closed': 'closed',
        'fraud': 'fraud',
        'Conf_CMD_1': 'confirmationPending', // Example class name
        'Commande_en_livraison_prestataire': 'deliveryInProgress', // Example class name
        'Livraison_Confirmee': 'deliveryConfirmed', // Example class name
        'CMD_Done': 'orderCompleted' // Example class name
    }

});