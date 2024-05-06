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
    smallestDuplicate=duplicateNumber[0];
    smallestUnique=uniqueNumber[0];
    for(k of duplicateNumber)
        {
            if(k<smallestDuplicate)
                {
                    smallestDuplicate=k;
                }
        }
       // console.log(duplicateNumber)
        for(l of uniqueNumber)
            {
                if(l<smallestUnique)
                    {
                        smallestUnique=l;
                    }
            }
            //console.log(uniqueNumber)
             result=Number(smallestDuplicate)+Number(smallestUnique);
             console.log(result);