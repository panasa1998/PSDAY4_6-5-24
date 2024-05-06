let prompt=require(`prompt-sync`)();
let num=prompt("Enter a number");

emptyString="";
duplicateNumber="";
uniqueNumber="";

for(n of num)
{
    if(!emptyString.includes(n))
        {
            emptyString+=n;
        }
}
//console.log(emptyString)
for(i of emptyString)
    {
        count=0;
        for(j of num)
            {
                if(i==j)
                    {
                        count++;
                    }
            }
            if(count>1)
                {
                    duplicateNumber+=i;
                }
                else
                {
                    uniqueNumber+=i;
                }
    }
    largestDuplicate=duplicateNumber[0];
    largestUnique=uniqueNumber[0];
    for(k of duplicateNumber)
        {
            if(k>largestDuplicate)
                {
                    largestDuplicate=k;
                }
        }
       // console.log(duplicateNumber)
        for(l of uniqueNumber)
            {
                if(l>largestUnique)
                    {
                       largestUnique=l;
                    }
            }
            //console.log(uniqueNumber)
             result=Number(largestDuplicate)+Number(largestUnique);
             console.log(result);