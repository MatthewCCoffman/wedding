<script>
  // @ts-ignore
  import Carousel from './carousel.svelte';
  import pic1 from '$lib/images/062DAEB1-074F-4D90-B101-378E23FE0F8A.jpeg';
  import pic2 from '$lib/images/0F865026-F796-4280-8D61-13C12E0F43E7.jpeg';
  import pic3 from '$lib/images/11012DCD-BDF0-4EAE-8233-7CF562139A6D.jpeg';
  import pic4 from '$lib/images/12E9999A-06D2-42C3-8B01-562FFA2FACB1.jpeg';
  import pic5 from '$lib/images/136CD83E-D76A-4386-B063-086EF433C1EA.jpeg';
  import pic6 from '$lib/images/1D8456B8-EDAF-459F-81C1-BA30DD17B01F.jpeg';
  import pic7 from '$lib/images/30063063-CCC3-49B6-891A-E5FEDC48816B.jpeg';
  import pic8 from '$lib/images/3BFE13D3-99CC-4747-8E30-DA473E95E922.jpeg';
  import pic9 from '$lib/images/428DC094-52A7-40BE-B6FF-4CD4786BA07C.jpeg';
  import pic10 from '$lib/images/4BD7C524-6896-4C3A-A4AC-1557A6950B22.jpeg';
  import pic11 from '$lib/images/4C65CBCA-2166-4B24-B355-04E7D292F492.jpeg';
  import pic12 from '$lib/images/520AA0B9-8AD5-4CEB-8D73-1F24C5DED5CD.jpeg';
  import pic13 from '$lib/images/556D49D0-EAB8-429D-907F-62D20F068288.jpeg';
  import pic14 from '$lib/images/680CDD29-8359-42D3-9CC6-3DBD8E668A47.jpeg';
  import pic15 from '$lib/images/69E70BD2-976E-4898-84D3-D47992649735.jpeg';
  import pic16 from '$lib/images/73A79ADC-E638-4D7F-8DEC-51A9F71DE407.jpeg';
  import pic17 from '$lib/images/78E1B803-50EE-44A6-BFAF-478F2D6B1F2A.jpeg';
  import pic18 from '$lib/images/791C5E6F-B963-4CD1-8ABD-E6FE065F84C6.jpeg';
  import pic19 from '$lib/images/8508B2FA-66C4-480F-8B21-6D1E1999BCAB.jpeg';
  import pic20 from '$lib/images/8D92EEB7-1E64-4396-9BEC-02FCEB206856.jpeg';
  import pic21 from '$lib/images/918428E3-CCCC-4905-95CB-A9FF8F044545.jpeg';
  import pic22 from '$lib/images/9FABAAFB-583D-4718-A068-56CD09104678.jpeg';
  import pic23 from '$lib/images/A5188E9E-D6CB-43FE-BB90-D4A2E77B9C37.jpeg';
  import pic24 from '$lib/images/B5493053-FA34-437B-815D-72EA629C8456.jpeg';
  import pic25 from '$lib/images/BAD39E09-7157-485A-9A02-3A0C03C3A660.jpeg';
  import pic26 from '$lib/images/F4FDF068-3001-4860-AC23-0D167013B787.jpeg';
  import pic27 from '$lib/images/F51935B0-65EF-4C57-9BC1-BFBE713D3AE6.jpeg';
  import pic28 from '$lib/images/F83C7893-82FB-4257-815D-4FBB8CA5D2E0.jpeg';
  import pic29 from '$lib/images/Facetune_19-06-2025-18-08-07.jpeg'
  // your list of photos
  const images = [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8,
    pic9,
    pic10,
    pic11,
    pic12,
    pic13,
    pic14,
    pic15,
    pic16,
    pic17,
    pic18,
    pic19,
    pic20,
    pic21,
    pic22,
    pic23,
    pic24,
    pic25,
    pic26,
    pic27,
    pic28,
    pic29
  ];
</script>

<div class="page-title">
  <div>Photos of Us</div>
</div>

<div class="page-content">
  <Carousel photos={images} />
</div>
