<script src=" https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script src="/SeedJs/src/pi.js"></script>
<script src="/SeedJs/src/seed.js"></script>
<script>
Vehiculo = Seed.extend({motor:{cilindros:0, pistones:0},
    ruedas:0,
    puertas:0,
    speed: 0,
    sound: "rrrrrrrr",
    run: function() {
        $('body').append(this.sound);
    },
    acelerate: function() {
        this.speed += 10;
    },
    brake: function() {
        this.speed -= 10;
    }
});
Coche = Vehiculo.extend({ruedas: 4,
    puertas:4,
    sound: "brrum brrrum"
});
Moto = Vehiculo.extend({ruedas: 2});
Clio = Coche.extend({
    motor:{cilindros:8, pistones:16},
    acelerate: function() {
        this.parent('acelerate');
        this.run();
        if(this.speed > 50) {
            this.speed = 0;
            alert('CRASH');
        }
    }

});
Yamaha = Moto.extend({motor:{cilindros:4, pistones:10}});

</script>
