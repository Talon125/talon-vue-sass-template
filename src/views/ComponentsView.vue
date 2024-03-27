<script setup>
import Banner from '../components/Banner.vue'
import Button from '../components/Button.vue'
import LoadingCircle from '../components/LoadingCircle.vue'

const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple']
const refreshPage = () => {
  window.location.reload()
}
</script>

<template>
  <div class="container">
    Colors not final and may change.

    <h2>Banners:</h2>
    <Banner topic="Default Banner">
      Yeah. You can also put things in here!<br />
      <Button @click="refreshPage">Refresh</Button>
    </Banner>
    <Banner
      v-for="color in colors"
      :key="color"
      topic="Heads up"
      :content="`${color} banner!`"
      :color="color.toLowerCase()"
    />

    <h2>Buttons:</h2>
    <table>
      <tbody>
        <tr>
          <th>Normal button:</th>
          <td><Button>Button</Button></td>
        </tr>
        <tr>
          <th>Default button:</th>
          <td><Button defaultButton>Button</Button></td>
        </tr>
        <tr v-for="color in colors" :key="color">
          <th>{{ color }} buttons:</th>
          <td><Button :color="color.toLowerCase()">Button</Button></td>
          <td><Button :color="color.toLowerCase()" defaultButton>Button</Button></td>
          <td><Button :color="color.toLowerCase()" disabled>Button</Button></td>
          <td><Button :color="color.toLowerCase()" href="#">Button</Button></td>
          <td>
            <Button :color="color.toLowerCase()" href="#" defaultButton>Button</Button>
          </td>
        </tr>
        <tr>
          <th>Disabled button:</th>
          <td><Button disabled>Button</Button></td>
        </tr>
        <tr>
          <th>Link button:</th>
          <td><Button href="#">Button</Button></td>
          <td><Button href="#" defaultButton>Button</Button></td>
          <td><Button href="#" stayHere>Button</Button></td>
          <td><Button href="#" defaultButton stayHere>Button</Button></td>
        </tr>
      </tbody>
    </table>

    <h2>Loading Circle:</h2>
    <LoadingCircle size="32" speed="0.5" />
    <LoadingCircle/>
    <LoadingCircle size="128" speed="2" />
  </div>
</template>

<style lang="scss" scoped>
th {
  padding-right: 1em;
  text-align: end;
}
</style>
