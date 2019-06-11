import Vue from 'vue'
import Component from './func-notification'

const NotificationConstructor = Vue.extend(Component)

const instances = []
let seed = 1

const notify = (options) => {
  const instance = new NotificationConstructor({
    propsData: options
  })

  const id = `notification_${seed++}`
  instance.id = id
  instance.vm = instance.$mount()
  console.log(document)
  document.body.appendChild(instance.vm.$el)

  let verticalOffset = 0
  instances.forEach(element => {
    verticalOffset += element.$el.offsetHeight + 16
  });
  verticalOffset += 16
  instance.verticalOffset = verticalOffset
  instances.push(instance)
  return instance.vm
}

export default notify