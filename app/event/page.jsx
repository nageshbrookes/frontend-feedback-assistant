"use client"
import React, {useState} from "react";
import Image from "next/image";
import ViewIcon from "../../public/images/viewicon.svg";
import EventLinkIcon from "../../public/images/eventlinkicon.svg"
import EditIcon from "../../public/images/editframeicon.svg";
import DeleteIcon from "../../public/images/deleteicon.svg";
import {TableHeader} from "@nextui-org/react";
import Button from "@components/button/Button";
import {Tab} from "@headlessui/react";
import EventDetails from "@components/EventDetails";
import EventModal from "@components/dialog/EventModal";

function page() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const activeEventList = [
    {
      id: 14587,
      name: "JKT 48 11th Anniversary Concert",
      period: "Sep 1, 2023 - Dec 1, 2023",
      available: 25467,
      price: "£110",
    },
    {
      id: 14587,
      name: "JKT 48 11th Anniversary Concert",
      period: "Sep 1, 2023 - Dec 1, 2023",
      available: 25467,
      price: "£110",
    },
    {
      id: 14587,
      name: "JKT 48 11th Anniversary Concert",
      period: "Sep 1, 2023 - Dec 1, 2023",
      available: 25467,
      price: "£110",
    }
  ]
  let [isOpenEventModal, setIsOpenEventModal] = useState(false)
  let [eventState, setEventState] = useState(null)
  function closeModal() {
    setEventState(null)
    setIsOpenEventModal(false)
  }
  function openModal(event) {
    setEventState(event)
    setIsOpenEventModal(true)
  }

  return (

    <div className={"py-8 px-[100px]"}>

      <EventModal isOpen={isOpenEventModal} close={()=>closeModal()} event={<EventDetails event={eventState} />}/>

      {/*insert breadcrumb*/}
      <div className={"flex gap-6"}>
        <div>Home</div>
        <div>/</div>
        <div>Events</div>
      </div>

      <div className={"mt-8"}>
        <Tab.Group>
          <Tab.List className={"w-full border-b-2"}>
            <Tab className={({selected})=>(selected ? "border-b-2 border-[#6A5BC1] px-12 py-6" : "")}>Active</Tab>
            {/*<Tab>All Events</Tab>*/}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              {/* Creating Table */}
              <div className={"bg-white p-6 mt-8"}>

                <div className={"flex justify-between mb-6"}> {/* Header */}
                  <div>
                    <input type={"search"} placeholder={"Search in active events"} className={"border px-4 py-3 rounded-xl"}/>
                  </div>
                  <div>
                    <Button text={"Create Feedback Form"} style={"text-white bg-primary-1 px-4 py-3 rounded-full"} />
                  </div>
                </div>


                <table className={"w-full"}>
                  {/* Row 1 */} {/*Table head*/}
                  <thead className={"text-left"}>
                  <tr className={"bg-[#F9F9F9] text-[#6C6C6C]"}>
                    <th className={"p-2.5"}><input type="checkbox"></input></th>
                    <th className={"p-2.5"}>Event ID</th>
                    <th className={"p-2.5"}>Event Name</th>
                    <th className={"p-2.5"}>Ticket Selling Period</th>
                    <th className={"p-2.5"}>Tickets Available</th>
                    <th className={"p-2.5"}>Ticket Price</th>
                    <th className={"p-2.5"}>Action</th>
                  </tr>
                  </thead>


                  {/* Row 2 */}
                  <tbody className={"w-full"}>

                  {
                    activeEventList.map((event,index) => {
                      return (
                          <tr key={index}>
                            <td className={"p-2.5"}><input type="checkbox"></input></td>
                            <td className={"p-2.5"}>{event.id}</td>
                            <td className={"p-2.5"}>{event.name}</td>
                            <td className={"p-2.5"}>{event.period}</td>
                            <td className={"p-2.5"}>{event.available}</td>
                            <td className={"p-2.5"}>{event.price}</td>
                            <td className={"p-2.5"}>
                              <div className={"flex gap-2.5"}>
                                <Image src={ViewIcon} alt={""} onClick={()=> openModal(event)} className={"cursor-pointer"}/>
                                <Image src={EventLinkIcon} alt={""}/>
                                <Image src={EditIcon} alt={""}/>
                                <Image src={DeleteIcon} alt={""}/>
                              </div>
                            </td>
                          </tr>
                      )
                    })
                  }


                  </tbody>

                </table>

              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div>All events here</div>
            </Tab.Panel>
          </Tab.Panels>

        </Tab.Group>
      </div>

    </div>
  );
}

export default page;