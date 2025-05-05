import { mount } from '@vue/test-utils'
import UserList from '@/components/UserList.vue'
import { describe, expect, test } from 'vitest'

describe('User List component unit tests: ', () => {
    test('renders props when passed', () => {
        const message = 'new message'
        const wrapper = mount(UserList, {
            props: { message }
        })
        expect(wrapper.text()).toMatch(message)
    })

    test('renders the list', () => {
        const wrapper = mount(UserList)
        const name = 'Anna Strong'
        const user = wrapper.get('[data-user="user"]')
        expect(user.text()).toContain(name)
        expect(wrapper.findAll('[data-user="user"]')).toHaveLength(2)
    })

    test('create a user', async () => {
        const wrapper = mount(UserList)
        const newname = 'Balloon'
        await wrapper.get('[id="new-user"]').setValue(newname)
        await wrapper.get('[id="form"]').trigger("submit")
        expect(wrapper.findAll('[data-user="user"]')).toHaveLength(3)
    })
})

