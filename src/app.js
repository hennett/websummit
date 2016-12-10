import Vue from 'vue';
import Vuetable from './components/Vuetable.vue';
import VuetablePagination from './components/VuetablePagination.vue';
import VuetablePaginationDropdown from './components/VuetablePaginationDropdown.vue';
import VuetablePaginationInfo from './components/VuetablePaginationInfo.vue';
import 'semantic-ui-css/semantic.css';
import 'semantic-ui-css/semantic.js';

new Vue({
    el: '#app',
    components: {
        Vuetable,
        VuetablePagination,
        VuetablePaginationDropdown,
        VuetablePaginationInfo
    },
    data: {
        loading: '',
        fields: [
            { name: 'company_name', title: 'Company Name' },
            { name: 'country', title: 'Country' },
            { name: 'city', title: 'City' },
            { name: 'track', title: 'Status' },
            { name: 'description', title: 'Description' },
            { name: 'website_url', title: 'Website URL' },
        ],
        multisort: true,
        paginationComponent: 'vuetable-pagination',
        perPage: 10,
        paginationInfoTemplate: 'Showing record: {from} to {to} from {total} item(s)'
    },
    watch: {
        'perPage' (val, oldVal) {
            this.$nextTick(function() {
                this.$refs.vuetable.refresh();
            });
        },
        'paginationComponent' (val, oldVal) {
            this.$nextTick(function() {
                this.$refs.pagination.setPaginationData(this.$refs.vuetable.tablePagination);
            });
        }
    },
    methods: {
        transform: function(data) {
            console.log(data);
        },
        showLoader: function() {
            this.loading = 'loading';
        },
        hideLoader: function() {
            this.loading = '';
        },
        onLoadError (response) {
            console.log(response);
        },
        onPaginationData (tablePagination) {
            this.$refs.paginationInfo.setPaginationData(tablePagination);
            this.$refs.pagination.setPaginationData(tablePagination);
        },
        onChangePage (page) {
            this.$refs.vuetable.changePage(page);
        },
        registerEvents () {
            let self = this;
            this.$on('vuetable:load-error', (response) => {
                self.onLoadError(response);
            });
        },
        created () {
            this.registerEvents();
        }
    }
});
