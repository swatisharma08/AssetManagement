"use client"
import React, {useState} from 'react';
import {
    Button, 
    FormControl,
    FormLabel,
    Input,
    Select,
    Box
  } from '@chakra-ui/react';

import { asset } from '@/app/type/asset';
const AddAsser = () => {
    const [asset, setAssets] = useState<asset>({
            name: "",
            cost: 0,
            aquiredDate: "", 
            assetType: "Commercial Rental Unit", 
        });
    const [error, setError] = useState<any>({
        name: "",
        cost: "",
        aquiredDate: "",
        assetType: "",
    })

    const saveAsset = () => {
        if(!isError()){
            console.log("save asset")
        }
        console.log(asset, error)
    }

    const isError = (): boolean => {

        if(asset.name === "") {
            setError({
                ...error,
                name: "Name is required"
            })
            return true
        }
        if( asset.cost === 0) {
            setError({
                ...error,
                cost: "Cost cannot be 0"
            })
            return true
        } 

        return false 
        
    }

    const handleChange = (key: string, value: any) => {
        setError({
            ...asset,
            [key]: ""
        })
        setAssets({
            ...asset,
            [key]: value
        })
    }

   return ( 
        <div>
             {/* Header */}
            <Box fontSize="3xl" fontWeight="bold" mb={6}>
                Add Asset
            </Box>
            <FormControl isRequired mb={4}>
                <FormLabel>Asset name</FormLabel>
                <Input placeholder='Asset name' value={asset.name} onChange={(e)=>handleChange('name', e.target.value)}/>
            </FormControl>

            <FormControl isRequired mb={4}>
                <FormLabel>Cost</FormLabel>
                <Input type="number" placeholder='Cost' value={asset.cost} onChange={(e)=>handleChange('cost', e.target.value)}/>
            </FormControl>

            <FormControl isRequired mb={4}>
                <FormLabel>Aquired Date</FormLabel>
                <Input type="Date" placeholder='Aquired Date' defaultValue={asset.aquiredDate} onChange={(e)=>handleChange('aquiredDate', e.target.value)}/>
            </FormControl>

            <FormControl isRequired mb={4}>
                <FormLabel>Asset Type</FormLabel>
                <Select placeholder='Select Asset Type' value={asset.assetType} onChange={(e)=>handleChange('aquiredDate', e.target.value)}>
                    <option>Commercial Rental Unit</option>
                    <option>Commercial Unit</option>
                    <option>Residental Plot</option>
                    <option>Residental Rental Flat</option>
                </Select>
            </FormControl>
        
            <Button
                mt={4}
                colorScheme='teal'
                type='submit'
                onClick={()=>saveAsset()}
            >
            Submit
            </Button>
        </div>
    )
};

export default AddAsser;
