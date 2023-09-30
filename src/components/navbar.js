import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Center
} from '@chakra-ui/react';
import React from 'react';


export default function NavBar() {
  return (
    <main >
        <Center>
            <Box>
                <Breadcrumb spacing='25px' separator='-'>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='/pagamentos'>Pagamento</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='/usuarios'>Usuarios</BreadcrumbLink>
                </BreadcrumbItem>
                
                <BreadcrumbItem>
                    <BreadcrumbLink href='/gepoc'>GEPOC</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='/gedre'>GEDRE</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='/ceesp'>CEESP</BreadcrumbLink>
                </BreadcrumbItem>

                </Breadcrumb>
            </Box>
        </Center>
    </main>
  )
}
