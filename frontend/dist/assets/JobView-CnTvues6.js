import{P as j}from"./PulseLoader-3I9hcJRm.js";import{_ as m,R as _,o as u,c as b,a as t,b as l,w as f,d as h,e as i,u as w,t as n,i as k,j as v}from"./index-B8qHEkt7.js";import{a as p}from"./axios-upsvKRUO.js";const J={components:{RouterLink:_}},L={class:"container m-auto py-6 px-6"};function B(s,o,r,a,e,c){const d=i("RouterLink");return u(),b("section",null,[t("div",L,[l(d,{to:"/jobs",class:"text-green-500 hover:text-green-600 flex items-center"},{default:f(()=>o[0]||(o[0]=[t("i",{class:"pi pi-arrow-circle-left mr-2"},null,-1),h(" Back to Job Listings ")])),_:1})])])}const R=m(J,[["render",B]]),D={components:{PulseLoader:j,BackButton:R,RouterLink:_},data(){return{state:{job:{},isLoading:!0}}},setup(){const s=k(),o=v(),r=w(),a=s.params.id;return{route:s,router:o,toast:r,jobId:a}},methods:{async handleDeleteJob(){try{window.confirm("Are you sure you want to delete this job?")&&(await p.delete(`https://greenjobs.vercel.app/api/jobs/delete/${this.jobId}`),this.toast.success("Job Deleted Successfully"),this.router.push("/jobs"))}catch(s){console.error(s)}},async fetchJob(){try{const s=await p.get(`https://greenjobs.vercel.app/api/jobs/${this.jobId}`);this.state.job=s.data}catch(s){console.error(s)}finally{this.state.isLoading=!1}}},mounted(){this.fetchJob()}},C={key:0,class:"text-center my-10"},P={key:1,class:"bg-green-50"},I={class:"container m-auto py-10 px-6"},V={class:"grid grid-cols-1 md:grid-cols-70/30 w-full gap-6"},E={class:"bg-white p-6 rounded-lg shadow-md text-center md:text-left"},N={class:"text-gray-500 mb-4"},S={class:"text-3xl font-bold mb-4"},T={class:"text-gray-500 mb-4 flex align-middle justify-center md:justify-start"},A={class:"text-orange-700"},M={class:"bg-white p-6 rounded-lg shadow-md mt-6"},$={class:"mb-4"},q={class:"mb-4"},z={class:"bg-white p-6 rounded-lg shadow-md"},F={class:"text-2xl"},G={class:"my-2"},H={class:"my-2 bg-green-100 p-2 font-bold"},K={class:"my-2 bg-green-100 p-2 font-bold"},O={class:"bg-white p-6 rounded-lg shadow-md mt-6"};function Q(s,o,r,a,e,c){const d=i("PulseLoader"),g=i("BackButton"),x=i("RouterLink");return e.state.isLoading?(u(),b("div",C,[l(d)])):(u(),b("section",P,[l(g),t("div",I,[t("div",V,[t("main",null,[t("div",E,[t("div",N,n(e.state.job.type),1),t("h1",S,n(e.state.job.title),1),t("div",T,[t("p",A,n(e.state.job.location),1)])]),t("div",M,[o[1]||(o[1]=t("h3",{class:"text-green-800 text-lg font-bold mb-6"}," Job Description ",-1)),t("p",$,n(e.state.job.description),1),o[2]||(o[2]=t("h3",{class:"text-green-800 text-lg font-bold mb-2"},"Salary",-1)),t("p",q,n(e.state.job.salary),1)])]),t("aside",null,[t("div",z,[o[3]||(o[3]=t("h3",{class:"text-xl font-bold mb-6"},"Company Info",-1)),t("h2",F,n(e.state.job.company_name),1),t("p",G,n(e.state.job.company_description),1),o[4]||(o[4]=t("hr",{class:"my-4"},null,-1)),o[5]||(o[5]=t("h3",{class:"text-xl"},"Contact Email:",-1)),t("p",H,n(e.state.job.company_contact_email),1),o[6]||(o[6]=t("h3",{class:"text-xl"},"Contact Phone:",-1)),t("p",K,n(e.state.job.company_contact_phone),1)]),t("div",O,[o[8]||(o[8]=t("h3",{class:"text-xl font-bold mb-6"},"Manage Job",-1)),l(x,{to:`/jobs/edit/${e.state.job.id}`,class:"bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"},{default:f(()=>o[7]||(o[7]=[h("Edit Job")])),_:1},8,["to"]),t("button",{onClick:o[0]||(o[0]=(...y)=>c.handleDeleteJob&&c.handleDeleteJob(...y)),class:"bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"}," Delete Job ")])])])])]))}const Y=m(D,[["render",Q]]);export{Y as default};
