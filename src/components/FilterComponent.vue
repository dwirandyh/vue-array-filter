<template>
    <div>
        <h3>Global Filter</h3>
        <table class="table table-bordered">
            <tr>
                <td>To USD</td>
                <td>{{ price | toUSD }}</td>
            </tr>
        </table>
        <h3>Local Filter | String</h3>
        <table class="table table-bordered">
            <tr>
                <td>Append</td>
                <td>{{ 'Love ' | append('Vue.js') }}</td>
            </tr>
            <tr>
                <td>Prepend</td>
                <td>{{ 'Randy' | prepend('Dwi ') }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
  name: 'FilterComponent',
  data: function () {
    return {
      price: 34.23
    }
  },
  filters: {
    /**
       * @return {string}
       */
    Upper (value) {
      return value.toUpperCase()
    },

    /**
       * @return {string}
       */
    append (str, postifx) {
      if (!str && str !== 0) {
        str = ''
      } else {
        str = str.toString()
      }
      return str + postifx
    },
    /**
       *
       * @param str
       * @param prefix
       * @returns {string}
       */
    prepend (str, prefix) {
      if (!str && str !== 0) {
        str = ''
      } else {
        str = str.toString()
      }
      return prefix + str
    }
  }
}
</script>

<style scoped>

</style>
