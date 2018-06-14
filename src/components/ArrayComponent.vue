<template>
    <div>
        <h3>Array</h3>
        <table class="table table-responsive">
            <thead>
            <tr>
                <td>Size</td>
                <td>['a', 'b', 'c', 'd'] = {{ ['a', 'b', 'c', 'd'] | size }}</td>
            </tr>
            <tr>
                <td>Reverse</td>
                <td>{{ 'abcd' | reverse }} - {{ ['a', 'b', 'c', 'd'] | reverse }}</td>
            </tr>
            <tr>
                <td>Range 1 - 10</td>
                <td>{{ [] | range(1, 10) }}</td>
            </tr>
            <tr>
                <td>Hello At 6</td>
                <td>{{ 'Hello World' | at(6) }}</td>
            </tr>
            <tr>
                <td>Mean [1, 2, 3, 4, 5]</td>
                <td>{{ [1, 2, 3, 4, 5] | mean }}</td>
            </tr>
            <tr>
                <td>Sum</td>
                <td>{{ [1, 2, 3, 4, 5] | sum(4) }}</td>
            </tr>
            </thead>
        </table>
    </div>
</template>

<script>
    var _ = require('underscore')
    export default {
        name: 'ArrayComponent',
        filters: {
            /**
             * Size of array or string
             * @param arr
             * @returns {*}
             */
            size (arr) {
                var length = arr['length']
                if (length) {
                    return length
                }
                return 0
            },
            /**
             * Reverse array or string
             * @param arr
             * @returns {*}
             */
            reverse (arr) {
                if (typeof arr === 'string') {
                    return arr.split('').reverse().join('')
                }

                if (_.isArray(arr)) {
                    return arr.concat().reverse()
                }
                return arr
            },
            /**
             * Create range array
             * @param arr
             * @param from
             * @param to
             * @returns {Array}
             */
            range (arr, from, to) {
                var result = []
                for (from; from <= to; from++) {
                    result.push(from)
                }
                return result
            },
            /**
             * get item at the specified index
             * @param arr
             * @param index
             * @returns {*}
             */
            at (arr, index) {
                if (_.isArray(arr) || _.isString(arr)) {
                    index = Number(index)
                    return arr[index]
                }
                return undefined
            },
            /**
             * Calculate mean of array
             * @param arr
             * @returns {number}
             */
            mean (arr) {
                var length = arr.length
                var sum = arr.reduce(function (prev, curr) {
                    return prev + curr
                }, 0)
                return sum / length
            },
            /**
             * Sum array item
             * @param arr
             * @param baseValue
             * @returns {*}
             */
            sum (arr, baseValue = 0) {
                if (_.isArray(arr)) {
                    var sum = arr.reduce(function (prev, curr) {
                        return prev + curr
                    })

                    var result = baseValue + sum

                    return result
                }
                return ''
            }
        }
    }
</script>

<style scoped>

</style>
