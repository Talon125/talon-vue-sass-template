<script setup>
import Banner from '../components/Banner.vue'
import Button from '../components/Button.vue'

const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple']
const refreshPage = () => {
  window.location.reload()
}
</script>

<template>
  <div class="container">
    <div style="margin: 2em 0; width: 100%; height: 1px"></div>
    <h1>Banners:</h1>
    <Banner topic="Default Banner">
      Yeah. You can also put things in here!<br />
      <Button content="Refresh" @click="refreshPage" />
    </Banner>
    <Banner
      v-for="color in colors"
      :key="color"
      topic="Heads up"
      :content="`${color} banner!`"
      :color="color.toLowerCase()"
    />
    <div style="margin: 12em 0; width: 100%; height: 1px"></div>
    <h1>Buttons:</h1>
    <table>
      <tbody>
        <tr>
          <th>Normal button:</th>
          <td><Button content="Button" /></td>
        </tr>
        <tr>
          <th>Default button:</th>
          <td><Button content="Button" defaultButton /></td>
        </tr>
        <tr v-for="color in colors" :key="color">
          <th>{{ color }} buttons:</th>
          <td><Button content="Button" :color="color.toLowerCase()" /></td>
          <td><Button content="Button" :color="color.toLowerCase()" defaultButton /></td>
          <td><Button content="Button" :color="color.toLowerCase()" disabled /></td>
          <td><Button content="Button" :color="color.toLowerCase()" href="#" /></td>
          <td>
            <Button
              content="Button"
              :color="color.toLowerCase()"
              href="#"
              defaultButton
            />
          </td>
        </tr>
        <tr>
          <th>Disabled button:</th>
          <td><Button content="Button" disabled /></td>
        </tr>
        <tr>
          <th>Link button:</th>
          <td><Button content="Button" href="#" /></td>
          <td><Button content="Button" href="#" defaultButton /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
th {
  padding-right: 1em;
  text-align: end;
}
</style>
