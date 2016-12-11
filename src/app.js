import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);

import Vuetable from 'vuetable/src/components/Vuetable.vue';
import VuetablePagination from 'vuetable/src/components/VuetablePagination.vue';
import VuetablePaginationDropdown  from 'vuetable/src/components/VuetablePaginationDropdown.vue';

Vue.component('vuetable', Vuetable);
Vue.component('vuetable-pagination', VuetablePagination);
Vue.component('vuetable-pagination-dropdown', VuetablePaginationDropdown);

import 'semantic-ui-css/semantic.css';
import 'semantic-ui-css/semantic.js';

new Vue({
    el: '#app',
    data: {
        fields: [
            { name: 'company_name', title: 'Company'},
            { name: 'parent_industry', title: 'Industry'},
            { name: 'country', title: 'Country'},
            { name: 'city', title: 'City'},
            { name: 'track', title: 'Status'},
            { name: 'elevator_pitch', title: 'Description'},
            { name: 'website_url', title: 'Website URL'},
        ]
    },
    methods: {
        transform: function(data) {
            var transformed = {};
            transformed.pagination = {
                total: data.startups.length,
                per_page: 25,
                current_page: 1,
                last_page: Math.ceil(data.startups.length / 25),
                from: 1,
                to: 25
            };
            transformed.data = [];
            for (let i = 0; i < data.startups.length; i++) {
                transformed.data.push({
                    id: data.startups[i].id,
                    company_name: data.startups[i].company_name,
                    parent_industry: data.startups[i].parent_industry,
                    country: data.startups[i].country,
                    city: data.startups[i].city,
                    track: data.startups[i].track,
                    elevator_pitch: data.startups[i].elevator_pitch,
                    website_url: data.startups[i].website_url
                });
            }
            return transformed;
        }
    }
});
