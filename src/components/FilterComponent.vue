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
            <tr>
                <td>Repeat</td>
                <td>{{ 'Hello' | repeat(1) }}</td>
            </tr>
            <tr>
                <td>Remove</td>
                <td>{{ 'Hello World' | remove('Hello') }}</td>
            </tr>
            <tr>
                <td>Split</td>
                <td>{{ 'One-Two-Three-Four-Five' | split('-') }}</td>
            </tr>
            <tr>
                <td>Trim</td>
                <td>{{ '         Trim Left & Right     ' | trim }}</td>
            </tr>
            <tr>
                <td>Trim Right</td>
                <td>{{ '       Trim Right          ' | trimRight }}</td>
            </tr>
            <tr>
                <td>Trim Left</td>
                <td>{{ '        Trim Left        ' | trimLeft }}</td>
            </tr>
            <tr>
                <td>lowercase</td>
                <td>{{ 'LOWER CASE' | lowerCase }}</td>
            </tr>
            <tr>
                <td>uppercase</td>
                <td>{{ 'UPPER CASE' | upperCase }}</td>
            </tr>
            <tr>
                <td>Camel Case</td>
                <td>{{ 'Camel Case' | camelCase }}</td>
            </tr>
            <tr>
                <td>Underscore Case</td>
                <td>{{ 'Underscore Case' | underscoreCase }}</td>
            </tr>
            <tr>
                <td>Pascal Case</td>
                <td>{{ 'pascal case' | pascalCase }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    var _ = require('underscore')

    export default {
        name: 'FilterComponent',
        data: function () {
            return {
                price: 34.23,
                strHtml: '<p>Hello World</p>'
            }
        },
        filters: {
            upperCase (str) {
                return str.toUpperCase()
            },
            lowerCase (str) {
                return str.toString().toLowerCase()
            },
            camelCase (str) {
                return str.split(' ').map(function (word, index) {
                    // If it is the first word make sure to lowercase all the chars.
                    if (index === 0) {
                        return word.toLowerCase()
                    }
                    // If it is not the first word only upper case the first char and lowercase the rest.
                    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                }).join('')
            },
            underscoreCase (str) {
                return str.split(' ').map(function (word, index) {
                    // If it is the first word make sure to lowercase all the chars.
                    if (index === 0) {
                        return word.toLowerCase()
                    }
                    // If it is not the first word only upper case the first char and lowercase the rest.
                    return '_' + word.charAt(0).toLowerCase() + word.slice(1).toLowerCase()
                }).join('')
            },
            pascalCase (str) {
                return str.split(' ').map(function (word, index) {
                    // If it is the first word make sure to lowercase all the chars.
                    if (index === 0) {
                        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                    }
                    // If it is not the first word only upper case the first char and lowercase the rest.
                    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                }).join('')
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
            },
            /**
             * @param str
             * @param n
             * @returns {string}
             */
            repeat (str, n) {
                n = n ? Number(n) : 0
                if (isNaN(n)) {
                    n = 0
                }

                n = Math.floor(n)

                if (n <= -1) {
                    n = 0
                }

                var ret = ''
                for (var i = 1; i <= n; i++) {
                    ret += str
                }
                return ret
            },
            /**
             *
             * @param str
             * @param substr
             * @returns {*}
             */
            remove (str, substr) {
                if (_.isString(str)) {
                    str = str.split(substr).join('')
                }
                return str
            },
            /**
             *
             * @param str
             * @param separator
             * @returns {*}
             */
            split (str, separator) {
                if (_.isString(str)) {
                    return str.split(separator)
                } else {
                    return str
                }
            },
            /**
             *
             * @param str
             * @returns {*}
             */
            trim (str) {
                var pattern = /^\\s+|\\s+$/g
                if (_.isString(str)) {
                    return str.replace(pattern, pattern)
                } else {
                    return str
                }
            },
            /**
             *
             * @param str
             * @returns {*}
             */
            trimLeft (str) {
                var pattern = /^\\s+/
                if (_.isString(str)) {
                    return str.replace(pattern, pattern)
                } else {
                    return str
                }
            },
            /**
             *
             * @param str
             * @returns {*}
             */
            trimRight (str) {
                var pattern = /\\s+$/
                if (_.isString(str)) {
                    return str.replace(pattern, pattern)
                } else {
                    return str
                }
            }
        }
    }
</script>

<style scoped>

</style>
