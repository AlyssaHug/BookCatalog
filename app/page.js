import Image from "next/image";
import Header from "@/app/ui/Header/Header";
import Button from "@/app/ui/buttons/Buttons";
import Card from "@/app/ui/Cards/Card";
import classNames from "classnames";

export default function Home() {
    return (
        <>
            <main>
                <Header
                    value='Book Catalog'
                    size='large'></Header>
                <div className='container'>
                    <Button
                        size='large'
                        value='New'></Button>
                    <Card
                        imageSrc='/images/programming.png'
                        author='By Jonathan Bartlett'
                        href='https://itbook.store/books/9781484287507'></Card>
                    <Card
                        imageSrc='/images/software.png'
                        author=' By Panagiotis Leludas'
                        href='https://itbook.store/books/9781484295137'></Card>
                </div>
                <div className='footer'>
                    <Header
                        value='Alyssa Huggins, 2025'
                        size='small'></Header>
                </div>
            </main>
        </>
    );
}
