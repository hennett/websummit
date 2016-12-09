new Vue({
    el: '#exhibition',
    data: {
        loading: false,
        apiUrl: 'lisbon-startups.json',
        responseData: {},
        countryUrl: 'countries.json',
        countryData: {}
    },
    mounted: function () {
        this.loading = true;
        this.fetchStartups();
        this.fetchCountryCodes();
    },
    methods: {
        fetchStartups: function () {
            this.$http.get(this.apiUrl).then(function (response) {
                this.responseData = Object.assign({}, this.responseData, response.body);
                this.loading = false;
            }, function (error) {
                console.log(error);
            });
        },
        fetchCountryCodes: function() {
            this.$http.get(this.countryUrl).then(function (response) {
                this.countryData = Object.assign({}, this.countryData, response.body);
            }, function (error) {
                console.log(error);
            });
        }
    }
});

Vue.component('country-code', {
    template: '<span class="flag-icon flag-icon-{{ flagCode }}"></span>',
    data: function() {
        return {
            flagCode: 'gr'
        }
    }
});
