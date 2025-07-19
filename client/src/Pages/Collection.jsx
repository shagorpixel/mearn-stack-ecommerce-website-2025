import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from './../Context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import Title from '../Components/Title';
import ProductItem from './../Components/ProductItem';

const Collection = () => {
    const {products,search} = useContext(ShopContext);
    const [showFilter,setShowFilter] = useState(false);
    const[filterProducts,setFilterProducts] = useState([]);
    const[category,setCategory] = useState([]);
    const [subCategory,setSubCategory] = useState([]);
    const [shortType,setShortType] = useState('relavent');
    const toggleCategory = (e)=>{
        if(category.includes(e.target.value)){
            setCategory(prev=>prev.filter(item=>item !== e.target.value))
        }else{
            setCategory(prev=>[...prev, e.target.value])
        }
    }
    const toggleSubCategory = (e)=>{
        if(subCategory.includes(e.target.value)){
            setSubCategory(prev=>prev.filter(subCategory=>subCategory !== e.target.value));
        }else{
            setSubCategory(prev=>[...prev,e.target.value]);
        }
    }
    const applyFilter = ()=>{
        let productCopy = products.slice();
        if(search){
            productCopy = productCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()));
        }
        if(category.length>0){
            productCopy = productCopy.filter(item=>category.includes(item.category))
        }
        if(subCategory.length>0){
            productCopy = productCopy.filter(item=>subCategory.includes(item.subCategory));
        }
        setFilterProducts(productCopy)
    }
    const shortProduct = ()=>{
        let fpCopy = filterProducts.slice();
        switch(shortType){
            case'low-high':
                setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
                break;
            case 'high-low':
                setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
                break
            default:
                applyFilter();
                break
        }
    }
    useEffect(()=>{
        applyFilter();
    },[category,subCategory,search]);
    useEffect(()=>{
        shortProduct();
    },[shortType]);
   
    
    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
            {/* filter Options */}
            <div className=' min-w-60'>
                <p onClick={()=>setShowFilter((prev)=>!prev)} className=' my-2 text-xl flex items-center cursor-pointer gap-2'>Filters
                    <img className={`h-3 sm:hidden ${showFilter?'rotate-90':''}`} src={assets.dropdown_icon} alt="" />
                </p>
                {/* Category Filter */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 md:block ${showFilter?'':'hidden'}`}>
                    <p className=' mb-3 text-sm font-medium'>CATEGORIES</p>
                    <div className=' flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <p className=' flex gap-2'>
                            <input id='Men' onChange={toggleCategory} className=' w-3' type="checkbox" value={'Men'} />
                            <label htmlFor="Men">Men</label>
                        </p>
                        <p className=' flex gap-2 '>
                            <input id='Women' onChange={toggleCategory} className=' w-3' type="checkbox" value={'Women'} />
                            <label htmlFor="Women">Women</label>
                        </p>
                        <p className=' flex gap-2 '>
                            <input id='Kids' onChange={toggleCategory} className=' w-3' type="checkbox" value={'Kids'} />
                            <label htmlFor="Kids">Kids</label>
                        </p>
                    </div>
                </div>
                {/* Sub Category Filter */}
                <div className={`border border-gray-300 pl-5 py-3 my-5 md:block ${showFilter?'':'hidden'}`}>
                    <p className=' mb-3 text-sm font-medium'>CATEGORIES</p>
                    <div className=' flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <p className=' flex gap-2'>
                            <input id='Topwear' onClick={toggleSubCategory} className=' w-3' type="checkbox" value={'Topwear'} />
                            <label htmlFor="Topwear">Topwear</label>
                        </p>
                        <p className=' flex gap-2 '>
                            <input id='Bottomwear' onClick={toggleSubCategory} className=' w-3' type="checkbox" value={'Bottomwear'} />
                            <label htmlFor="Bottomwear">Bottomwear</label>
                        </p>
                        <p className=' flex gap-2 '>
                            <input id='Winterwear' onClick={toggleSubCategory} className=' w-3' type="checkbox" value={'Winterwear'} />
                            <label htmlFor="Winterwear">Winterwear</label>
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Sidebar */}
            <div className=' flex-1'>
                <div className=' flex justify-between text-base sm:text-2xl mb-4'>
                    <Title text1={"ALL"} text2={"COLLECTIONS"}></Title>
                    {/* Product Shourt */}
                    <select onChange={(e)=>setShortType(e.target.value)} className='border border-gray-300 text-sm
                     px-2'>
                        <option value="relevent">Short By: Relevent</option>
                        <option value="low-high">Short By: Low to High</option>
                        <option value="high-low">Short By: High to Low</option>
                     </select>
                </div>

                {/* map Products */}
                <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                    {
                      filterProducts.map((product,index)=><ProductItem key={index}product={product} />)  
                    }
                </div>
            </div>  
        </div>
    );
};

export default Collection;