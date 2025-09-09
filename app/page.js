import Image from "next/image";
import Header from "@/app/ui/Header/Header";
import Button from "@/app/ui/buttons/Buttons";
import Card from "@/app/ui/Cards/Card";

export default function Home() {
    return (
        <div>
            <Header
                value='Book Catalog'
                size='large'></Header>
            <div className='container'>
                <Button
                    size='large'
                    value='New'></Button>
                <Card
                    imageSrc='/programming.png'
                    author='By Jonathan Bartlett'></Card>
            </div>
            <div className='footer'>
                <Header
                    value='Alyssa Huggins, 2025'
                    size='small'></Header>
            </div>
        </div>
    );
}
