export default {
  created () {
    let { props } = this.$options

    if (!props) return

    console.log('before', props)
    console.log('-----')

    props = Object
      .entries(props)
      .map(([ key, value ]) => {
        return Object.entries(value).reduce((newProps, [ type, fn ]) => {
          newProps[key] = {
            ...newProps[key],
            [type]: typeof fn === 'function' ? props[key][type].bind(this, type === 'validator' && this.$props[key]) : { ...props[key][type] }
          }

          return newProps
        }, {})
      })

    console.log('-----')
    console.log('after', props)
  }
}
