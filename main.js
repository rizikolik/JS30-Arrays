const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
   // Array.prototype.filter()
  const fifteen=inventors.filter(inventor=>(inventor.year<1600&&inventor.year>=1500));
  //console.table(fifteen); list of borned after 1499 and 1600

      // Array.prototype.map()
  const fullName=inventors.map(inventor=>inventor.first + " " + inventor.last);
  //console.table(fullName)    list of inventors full names

  // Array.prototype.sort()
  const sortedBirth=inventors.sort((a,b)=> a.year>b.year  ? 1 :-1)
 // console.table(sortedBirth)  // sorted years by birth of date from the early one.
  const sortedDie=inventors.sort((a,b)=> a.passed<b.passed? 1:-1)
  //console.table(sortedDie);  //sorted dıe years from the early one.

   // Array.prototype.reduce()
    // 4. How many years did all the inventors live?
  const years=inventors.reduce((sum,inventor)=> { return sum + (inventor.passed-inventor.year)},0);


  
//sort inventors  by theır age the smaller is first
  const oldest=inventors.sort((a,b)=>{
      const first=a.passed-a.year;
      const next=b.passed-b.year;
       return first>next ? 1:-1;

  })
  // console.table(oldest)

      // 6. create a list of street  in Paris that contain 'meydan' anywhere in the name
    // https://www.istanbeautiful.com/tr/istanbul-meydanlar-caddeler/
 


 
/*const kateg=document.querySelector(".mw-category");
const links=Array.from(kateg.querySelectorAll("a"));
//console.log(links); 
 const de=links
               .map(link=>link.textContent)
            .filter(streetName=>streetName.includes("de"));*/

  
    // 7. sort Exercise
    // Sort the people alphabetically by last name
    
    const sorted=people.sort(
        (first,next)=>{
            const[ff, fl]=first.split(", ");
            //console.log(fl);
            
            const[nf, nl]=next.split(", ");
            //console.log(nl)
           return  fl>nl ? -1:1;//ı fotgot thıs return and tried 30 mınutes to find the bug....
            
       
        }
    );
    //console.log(sorted);

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
 const instances=data.reduce((obj,item)=>{
     if(!obj[item]){
         obj[item]=0;
     }
     obj[item]++
     return obj;
     
 },{})
 console.log(instances)
