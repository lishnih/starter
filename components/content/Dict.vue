<script setup lang="ts">

// https://github.com/douglascrockford/JSON-js/blob/master/cycle.js
function decycle(object, replacer) {
  "use strict";

  var objects = new WeakMap();     // object to path mappings

  return (function derez(value, path) {
    var old_path;   // The path of an earlier occurance of value
    var nu;         // The new object or array

    if (replacer !== undefined) {
      value = replacer(value);
    }

    if (
      typeof value === "object"
      && value !== null
      && !(value instanceof Boolean)
      && !(value instanceof Date)
      && !(value instanceof Number)
      && !(value instanceof RegExp)
      && !(value instanceof String)
    ) {
      old_path = objects.get(value);
      if (old_path !== undefined) {
        return {$ref: old_path};
      }

      objects.set(value, path);

      if (Array.isArray(value)) {
        nu = [];
        value.forEach(function (element, i) {
            nu[i] = derez(element, path + "[" + i + "]");
        });
      } else {
        nu = {};
        Object.keys(value).forEach(function (name) {
          nu[name] = derez(
            value[name],
            path + "[" + JSON.stringify(name) + "]"
          );
        });
      }
      return nu;
    }
    return value;
  }(object, "$"));
};


const props = defineProps({
  obj: {
    required: true
  },
  id: {
    type: String,
    default: ''
  },
  func: {
    type: Function,
    default: () => {}
  },
  dest: {
    type: String,
    default: ''
  },
  st: {
    type: Function,
    default: obj => obj
  },
  level: {
    type: Number,
    default: 0
  }
})

if ( props.level == 0 && process.browser && process.dev )
  console.log(props.obj);

const obj = props.level == 0 ? decycle(props.obj) : props.obj;

</script>

<template>

  <template v-if="obj && obj.constructor === Object">
  <table :id="id" class="obj border-2 border-indigo-600">
    <tbody>
      <template v-if="Object.keys(obj).length">
      <tr v-for="(value, key, idx) in obj" @click="func(value, dest)" class="odd:bg-rose-100/50 even:bg-rose-50/50">
        <td><b>{{ key }}</b></td>
        <td>
          <Dict :obj="value" :st="st" :level="level+1" />
        </td>
      </tr>
      </template>
      <template v-else>
      <tr><td><i>Empty dict</i></td></tr>
      </template>
    </tbody>
  </table>
  </template>
  <template v-else-if="Array.isArray(obj)">
  <table :id="id" class="arr border-2 border-rose-600">
    <tbody>
      <template v-if="obj.length">
      <tr v-for="(value, idx) in obj" @click="func(value, dest)" class="odd:bg-amber-100/50 even:bg-amber-50/50">
        <td><i>{{ idx+1 }}</i></td>
        <td>
          <Dict :obj="value" :st="st" :level="level+1" />
        </td>
      </tr>
      </template>
      <template v-else>
      <tr><td><i>Empty array</i></td></tr>
      </template>
    </tbody>
  </table>
  </template>
  <template v-else-if="typeof obj == 'symbol'">
  <i>Symbol: {{obj.description}}</i>
  </template>
  <template v-else>
  <div v-html="st(obj)"></div>
  </template>

</template>
