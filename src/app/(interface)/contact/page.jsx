// pages/contact.js
import { Input } from '@/components/ui/input';
import { Mail, MapPin } from 'lucide-react';
import Head from 'next/head';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import ContactForm from '@/components/Contact';

const statesAndUTs = [
  // States
  "AndhraPradesh",
  "ArunachalPradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "HimachalPradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "MadhyaPradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "TamilNadu",
  "Telangana",
  "Tripura",
  "UttarPradesh",
  "Uttarakhand",
  "WestBengal",

  // Union Territories
  "AndamanAndNicobarIslands",
  "Chandigarh",
  "DadraAndNagarHaveliAndDamanAndDiu",
  "Delhi",
  "Lakshadweep",
  "Puducherry",
  "JammuAndKashmir",
  "Ladakh",
];
const Contact = () => {
  return (
    <div className="bg-cover bg-center] h-scree bg-green-100">
      <Head>
        <title>Contact Us - Valmo</title>
        <meta name="description" content="Contact Valmo for the most reliable logistics service partner." />
      </Head>

      <ContactForm/>
    </div>
  );
};

export default Contact;
