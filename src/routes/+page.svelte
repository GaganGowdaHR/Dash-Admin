<script>
    import '../app.css'
    import Navbar from './Navbar/+page.svelte';
    import Sidebar from './Sidebar/+page.svelte';
    import Customers from './Customers/+page.svelte';
    import Pagination from './pagination/+page.svelte';

</script>

<div class="w-full h-full bg-whitesmoke">
    <Navbar />

<div class="flex">
    <Sidebar />

    <Customers class="bg-whitesmoke w-auto h-auto"/>

    <!-- <Pagination /> -->
</div>
</div>
