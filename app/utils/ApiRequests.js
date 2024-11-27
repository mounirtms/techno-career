Ext.define('Techno.utils.ApiRequest', {
    singleton: true,
    alternateClassName: 'Req',  // Alternate class name for easier access
    // Default headers that can be overridden by subclasses
    defaultHeaders: function () {
        return {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + Techno.magentoAccessToken// You can set a default auth token here if needed
        };
    },

    /**
    * Makes an HTTP request using the Fetch API with Promises.
    * @param {String} url - The URL to make the request to.
    * @param {Object} config - Configuration for the request.
    * @param {Function} onSuccess - Optional success callback function.
    * @param {Function} onError - Optional error callback function.
    * @returns {Ext.Promise} - A Promise resolving with the response data.
    */
    do: function (url, config, onSuccess, onError) {
        var me = this;

        // Merge the default headers with any custom headers from the config

        config = config || { };
        config.method = config.method||'GET';
        config.headers = Ext.apply({}, me.defaultHeaders(), config.headers);
        url = url+'?'+me.serializeParams(config.params||{})
 
        // Return a promise for handling asynchronous requests
        return new Ext.Promise(function (resolve, reject) {
            // Use the fetch API to make the request
            fetch(url, config)
                .then(function (response) {
                    // Check if the response is OK (status 200-299)
                    if (!response.ok) {
                        throw new Error('Request failed with status ' + response.status);
                    }
                    return response.json();
                })
                .then(function (data) {
                    // If a success callback is provided, call it
                    if (onSuccess) {
                        onSuccess(data);
                    }
                    // Resolve the promise with the response data
                    resolve(data);
                })
                .catch(function (error) {
                   
                        this.handleFetchError(error);
                        reject(error);
                    }.bind(this));
                
        });
    },

    serializeParams:function (params) {
        return Object.keys(params)
            .map(key => {
                if (typeof params[key] === 'object') {
                    return `${key}=${encodeURIComponent(JSON.stringify(params[key]))}`;
                }
                return `${key}=${encodeURIComponent(params[key])}`;
            })
            .join('&');
    },
    /**
     * Error handler for failed fetch requests.
     * @param {Error} error - The error object.
     * @param {Function} onError - Callback function to handle errors.
     */
    handleError: function (error, onError) {
        Toast.showToast("Error: " + error.message, "error");
    },

    init: function() {
        // Global Ajax exception listener
        Ext.Ajax.on('requestexception', this.onRequestException, this);
    },

    onRequestException: function (proxy, response, operation) {
        var errorMsg = 'An error occurred while processing the request.';

        if (response && response.status) {
            switch (response.status) {
                case 401:
                    errorMsg = 'Unauthorized access. Please login.';
                    break;
                case 403:
                    errorMsg = 'Forbidden access. You do not have permission.';
                    break;
                case 500:
                    errorMsg = 'Internal server error. Please try again later.';
                    break;
                default:
                    errorMsg = 'An unexpected error occurred.';
            }
        }

        // Show the error in a window or message box
        Ext.Msg.alert('Request Error', errorMsg);
    },
    /**
     * Custom function to handle the response and update store data.
     * @param {Object} data - The response data.
     * @param {Ext.data.Store} store - The store to update with the response data.
     */
    handleResponse: function (data, store) {
        store.loadData(data);  // Load data into the store
    },


    /**
   * Get product details by product ID.
   * @param {Number} productId - The product ID to fetch.
   * @returns {Ext.Promise} - Promise resolving the product data.
   */
    getProductDetails: function (productId) {
        var url = Techno.magentoApiUrl + 'products/' + productId;
        return this.makeRequest(url, {
            method: 'GET'
        });
    },

    /**
     * Get a list of all orders from Magento.
     * @returns {Ext.Promise} - Promise resolving the orders data.
     */
    getOrders: function () {
        var url = Techno.magentoApiUrl + 'orders';
        return this.makeRequest(url);
    },

    /**
     * Create a new order in Magento.
     * @param {Object} orderData - The order data to create.
     * @returns {Ext.Promise} - Promise resolving the created order.
     */
    createOrder: function (orderData) {
        var url = Techno.magentoApiUrl + 'orders';
        return this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(orderData)
        });
    },

    /**
     * Update an existing order in Magento.
     * @param {Number} orderId - The order ID to update.
     * @param {Object} updateData - The data to update the order with.
     * @returns {Ext.Promise} - Promise resolving the updated order.
     */
    updateOrder: function (orderId, updateData) {
        var url = Techno.magentoApiUrl + 'orders/' + orderId;
        return this.makeRequest(url, {
            method: 'PUT',
            body: JSON.stringify(updateData)
        });
    },

    /**
     * Get customer details from Magento.
     * @param {Number} customerId - The customer ID.
     * @returns {Ext.Promise} - Promise resolving the customer data.
     */
    getCustomerDetails: function (customerId) {
        var url = Techno.magentoApiUrl + 'customers/' + customerId;
        return this.makeRequest(url, {
            method: 'GET'
        });
    },

    /**
     * Create a new customer in Magento.
     * @param {Object} customerData - The customer data to create.
     * @returns {Ext.Promise} - Promise resolving the created customer.
     */
    createCustomer: function (customerData) {
        var url = Techno.magentoApiUrl + 'customers';
        return this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(customerData)
        });
    }
});
