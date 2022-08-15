import {defineStore} from "pinia";
import axios from "axios";
import {format, startOfDay} from "date-fns";

export const useStaffStore = defineStore("Staff", {
    state: () => {
        return {
            listStaffBackUp: [],
            listStaff: [],
            updateTime:"",
            startDateGet: "",
            endDateGet: "",
            toastMessage: {
                type: "",
                message: ""
            },
        }
    },
    actions: {
        changeToastMessage( type,message) {
            this.toastMessage.message=message;
            this.toastMessage.type=type;
        },
        getToken() {
          return  localStorage.getItem('accessToken');
        },
        changeDateGet(startDay, endDay) {
            this.startDateGet = startDay;
            this.endDateGet = endDay;
        },
        async getListStaff() {
            this.updateTime=format(new Date, 'HH:mm');
           this.getToken()
            const res = await axios.get(`https://x.ghtk.vn/api/v2/staff?start_date=${this.startDateGet}&end_date=${this.endDateGet}`,
                {
                    headers: {
                        'authorization': 'Bearer ' + this.getToken(),
                    }
                }
            )
            this.listStaff = res.data.data;
           this.listStaffBackUp = res.data.data;
        },
        async updateStaffStatus(id, status) {
            try {
                const res = await axios.post('https://x.ghtk.vn/api/v2/staff/set-status', {
                    shop_user_id: id,
                    status: status
                }, {
                    headers: {
                        'authorization': 'Bearer ' + this.getToken(),
                    },
                })
                this.changeToastMessage("success", res.data.message)

                    this.getListStaff();

            } catch (e) {
                this.changeToastMessage("error","Có lỗi xảy ra")
            }
        },

    }
});