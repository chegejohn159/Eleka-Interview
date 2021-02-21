<template>
<v-container grid-list-xs>
   <div class="home">
    
    <ShowData/>
  
  </div>
</v-container>
 
</template>

<script>
// @ is an alias to /src
import ShowData from '@/components/ShowData'


export default {
  name: 'Home',
  components: {
    ShowData

  
  }
}
</script>
