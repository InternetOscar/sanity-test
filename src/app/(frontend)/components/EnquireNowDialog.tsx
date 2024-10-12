import { Description, Dialog, DialogPanel, DialogTitle, Field, Label } from '@headlessui/react'
import { Textarea } from '@headlessui/react'
import { Input } from '@headlessui/react'
import { useState } from 'react'

export default function EnquireNowDialog() {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button className="col-start-2 col-end-3 bg-black p-4 text-white font-light rounded-md mb-[90px] uppercase text-left" onClick={() => setIsOpen(true)}>
      Enquire Now!
                    <div className='w-5 h-5 mt-[-2px] float-right'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" viewBox="0 0 256 256"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg></div>
      </button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 text-lg backdrop-blur-sm">
          <DialogPanel className="max-w-lg space-y-4 bg-white text-black p-12 rounded-xl drop-shadow-lg">
          <DialogTitle className="font-bold">Enquire about this property</DialogTitle>
            <Description>Please fill out the form below to enquire about this property</Description>
            {/* Name */}
            <Field>
              <Label>Full Name</Label>
              <Input className="border w-full mb-4" name="full_name" type="text" />
              <Label>Email Address</Label>
              <Input className="border w-full mb-4" name="email_address" type="email" />
              {/* Contact Number */}
              <Label>Phone Number</Label>
              <Input className="border w-full mb-4" name="contact_number" type="email" />
              {/* Message */}
              <Label>Message</Label>
              <Textarea className="border w-full mb-4" name="enquiry_message"></Textarea>
            </Field>

            {/* Email */}


            <div className="flex gap-4 float-right">
              <button onClick={() => setIsOpen(false)}>Cancel</button>
              <button className='border px-4 py-2 bg-black hover:bg-black/80 text-white rounded-md transition-all' onClick={() => setIsOpen(false)}>Enquire</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}
