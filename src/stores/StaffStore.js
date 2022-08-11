import {defineStore} from "pinia";
import axios from "axios";

const token = localStorage.getItem('accessToken');
export const useStaffStore = defineStore("Staff", {
    state: () => {
        return {
            listStaff: [],
            updateTime: {
                hour: 0,
                minute: 0,
            }
        }
    },
    actions: {
        async getListStaff(dayStart,dayEnd) {
            const d = new Date();
            this.updateTime.hour = d.getHours();
            this.updateTime.minute = d.getMinutes();
            const res = await axios.get(`https://x.ghtk.vn/api/v2/staff?start_date=${dayStart}&end_date=${dayEnd}`,
                {
                    headers: {
                        'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IiJ9.eyJ0b2tlbiI6IjNkZDU5ZWE5MDgyYWQ5ODYyYWVmYTczYTE0OTE2ZDJlN2JmN2YxYjdhZWRiMmNlZGQxMThkZDg5YzQ3ODg3MmQiLCJleHBpcmVkX2F0IjoiMjAyMS0wOC0xOVQwNTozNzozOC41MTA0MzBaIiwibW9fdGVsIjoiODQzNTYyNjIxMjEiLCJtb19yb2xlIjoiYWRtaW4iLCJtb191c2VybmFtZSI6ImhuY3A3QGdtYWlsLmNvbSJ9.M7U2RSNivrc0wFDhmXiOJgvhj2oH6AGNVNGxJ1OxDvA'
                    }
                }
            )
            this.listStaff = res.data.data;
        },
        async updateStaffStatus(id, status) {
            const res = await axios.post('https://x.ghtk.vn/api/v2/staff/set-status', {
                shop_user_id: id,
                status: status
            }, {
                headers: {
                    'authorization': `Bearer ${token}`,
                },
            })
            if (res.status === 200) {
                this.getListStaff();
            }
        },

    }
});