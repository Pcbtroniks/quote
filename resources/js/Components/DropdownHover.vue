<template>
  <div class="dropdown-container hidden md:flex justify-center px-8 lg:px-0">
    <div   @mouseover="showDropdown = true" @mouseleave="showDropdown = false" class="transition-all duration-300 ease-in-out">
         <a href="https://exploreemotions.agency/parques" target="_blank">
    <button type="button" class="dropdown-button rounded-b-xl  block px-4 py-4 bg-maingreen text-md leading-5 text-white hover:bg-green-900 hover:font-bold transition-all duration-300 ease-in-out text-center"><span>Ir a todos los Tours</span>
                                           </button>        
                                        </a>
     
    <div v-show="showDropdown" class="dropdown-content absolute z-10 shadow-lg min-w-[165px] bg-gray-50">
                            <div>
                                            <ul class="text-center font-bold w-full rounded-xl block">   
                                                <li>                                      
                                                    <a href="http://exploreemotions.agency/parques#275a359a-92a5-4eef-836d-0c57b1211fad">
                                                        Tour Xenses
                                                        </a>
                                                </li>
                                                        <li>
                                                    <a href="https://exploreemotions.agency/parques#897b6013-1742-4345-9a88-27fc957cc1f9">
                                                        Tour Xplore Fuego
                                                        </a>
                                                </li>
                                                        <li>
                                                    <a href="https://exploreemotions.agency/parques#dd4c6220-15e6-415a-92e0-2aed83022e4f">
                                                        Tour Xichen Itza
                                                        </a>
                                                </li>
                                                        <li>
                                                    <a href="https://exploreemotions.agency/parques#e04bf8bd-3b3d-4812-b013-5729658fde65">
                                                        Tour Xelha
                                                        </a>
                                                </li>
                                                        <li>
                                                    <a href="https://exploreemotions.agency/parques#691c9d5c-ccbe-4302-9a26-6046d3472efb">
                                                        Tour Xplor Día
                                                        </a>
                                                        </li>
                                            </ul>                                                

                            </div>

            <div class="border-t border-gray-100"></div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      showDropdown: false
    };
  }
};


// const handleButtonCLick = e => {
//     console.log("click left button", e);
// }

// const handleMenuClick = e => {
//     console.log("click", e);
// }

</script>

<style scoped>

.dropdown-content li {
  padding: 10px 15px;
  cursor: pointer;
}

.dropdown-content li:hover {
  background-color: #ddd;
}

</style>
