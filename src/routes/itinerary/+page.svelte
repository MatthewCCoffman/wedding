<script lang="ts">
	import pic1 from '$lib/images/4BD7C524-6896-4C3A-A4AC-1557A6950B22.jpeg';
	import pic2 from '$lib/images/1D8456B8-EDAF-459F-81C1-BA30DD17B01F.jpeg';
	import pic3 from '$lib/images/0F865026-F796-4280-8D61-13C12E0F43E7.jpeg';
</script>
<div class="page-title">
    <div>Itinerary</div>
</div>

<div class="image-row">
  <img class="header-images" src={pic1} alt="a museum we went to!">
  <img class="header-images" src={pic2} alt="a museum we went to!">
  <img class="header-images" src={pic3} alt="a museum we went to!">
</div>

<div class="page-content">
    <div class="timeline-section" data-date="11.21.25">
        <div class="section-header">
            REHEARSAL DINNER<br>
            <i class="section-pre-header">Friday</i>
        </div>
        <div class="section-body">
          <p><strong>2:30pm–3:20pm</strong><br>Rehearsal Pictures (Matthew)</p>
          <p><strong>3:30pm–4:30pm</strong><br>Wedding Rehearsal</p>
          <p><strong>5:00pm–7:00pm</strong><br>Rehearsal Dinner + Trio Band</p>
          <p><strong>7:00pm–8:00pm</strong><br>Family Member Speeches</p>
        </div>
    </div>
    <div class="timeline-section" data-date="11.22.25">
        <div class="section-header">
            WEDDING CEREMONY<br>
            <i class="section-pre-header"><strong>Saturday</strong></i>
        </div>
        <div class="section-body">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique nunc eu risus vestibulum, at posuere magna posuere. Maecenas in purus id ipsum porttitor tempor. Duis nec diam ut erat faucibus dapibus a vitae turpis. Sed euismod vestibulum urna, vitae cursus mauris interdum vel.
        </div>
    </div>
    <div class="timeline-section" data-date="11.23.25">
        <div class="section-header">
            AFTER WEDDING <br>
            BRUNCH <br>
            <i class="section-pre-header">Sunday, 6:30PM</i>
        </div>
        <div class="section-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique nunc eu risus vestibulum, at posuere magna posuere. Maecenas in purus id ipsum porttitor tempor. Duis nec diam ut erat faucibus dapibus a vitae turpis. Sed euismod vestibulum urna, vitae cursus mauris interdum vel.
            <br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique nunc eu risus vestibulum, at posuere magna posuere. Maecenas in purus id ipsum porttitor tempor. Duis nec diam ut erat faucibus dapibus a vitae turpis. Sed euismod vestibulum urna, vitae cursus mauris interdum vel.
        </div>
    </div>
</div>

<style>
/* Image Row */
.image-row {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem auto 2rem;
  flex-wrap: wrap;
  max-width: 1000px;
  padding: 0 1rem;
}

.image-row img {
  width: 300px;
  max-width: 100%;
  height: auto;
  border-radius: 1rem;
  object-fit: cover;
  box-shadow: 0 6px 15px rgba(247, 231, 206, 0.6); /* vibrant champagne glow */
  transition: transform 0.3s ease;
}
.image-row img:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 25px rgba(247, 231, 206, 0.8);
}

/* Page Title */
.page-title {
  text-align: center;
  font-size: 2rem;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  margin-bottom: 3rem;
  color:rgb(0, 0, 0);
}

/* Page Content */
.page-content {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 0 1rem 3rem;
  margin: 0 auto;
  font-family: 'Georgia', serif;
  text-align: center;
  width: 50%;
  color: #4a3c31; /* elegant dark brown */
}

/* Timeline Sections */
.timeline-section {
  padding: 2rem;
  background: rgb(255, 255, 255); 
  border-radius: 1rem;
  box-shadow: 0 6px 15px rgba(211, 211, 211, 0.4);
  transition: background 0.3s ease;
}

.timeline-section:hover {
  background:rgb(255, 255, 255);
}

/* Section Header */
.section-header {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color:rgb(31, 31, 31); /* muted rose brown */
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-family: 'Playfair Display', serif;
  text-shadow: 0 1px 2px rgba(183, 144, 126, 0.3);
}

.section-pre-header {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.75rem;
    color:rgb(31, 31, 31); /* muted rose brown */
    letter-spacing: 0.05em;


    text-shadow: 0 1px 2px rgba(183, 144, 126, 0.3);
}

/* Section Body */
.section-body {
  font-size: 1.1rem;
  line-height: 1.75;
  color:rgb(107, 107, 107);
  font-family: 'Georgia', serif;
}

/* Mobile Adjustments */
@media only screen and (max-width: 500px) {
  .page-content {
    line-height: 28px;
    margin-top: 25px;
    width: 80%;
    text-align: center;
  }
  
  .image-row {
    justify-content: center;
  }

  .image-row img {
    width: 100%;
    max-width: 320px;
    border-radius: 0.75rem;
  }

  .page-title {
    font-size: 2rem;
  }

  .timeline-section {
    padding: 1.5rem;
  }

  .section-header {
    font-size: 1.3rem;
    text-align: center;
  }

  .section-body {
    font-size: 1rem;
  }

  .timeline-section::before {
    text-align: center;
    font-size: 0.85rem;
  }
}
</style>
