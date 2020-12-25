//Bai 1//
function Weapon(name,damage,cooldown) {
    this.name=name;
    this.damage=damage;
    this.cooldown=cooldown;
}
var x = new Weapon("Zhonya Hourglas",200,"0.1s");

function Player(name,level,weapon) {
    this.name=name;
    this.level = level;
    this.weapon = function Weapon(){};
    this.attack = function(){
        console.log(Weapon.damage* this.level)
    
    },
}
var x = new Player("Duc",500,Weapon);

//Bai2//
var p1 = new Weapon("Gun",500,"0.2");
p1.attack = function(){
    console.log(Weapon.damage *Player.level)
}
var p2 = new Player("Duc",200,"Sniper");
p2.attack =function(){
    console.log(Weapon.damage * Player.level)
}



//bai 3//

var calculator = {
    a: 2,
    b:5,
    get(a,b){
        console.log(this.a +""+this.b)

    },
    add() {
        console.log(this.a + this.b)

    },
    sub() {
        console.log(this.a- this.b)
    },
    div(){
        console.log(this.a/this.b)
    },
    
}

//Bài hàm Counter//

function Counter(count) {
    this.count = count;
    this.up = function(){
        console.log(this.count + 1);   
    }
    this.down = function(){
        console.log(this.down - 1);
    }
    this.get = function() {
        console.log(this.count);
    }
};

var count = new Counter(0);

//Hàm tạo girl//

function Girl(hobby,nationality,idol,favoritesong) {
    this.hobby = hobby;
    this.nationality = nationality;
    this.idol =idol;
    this.favoritesong = favoritesong;
    this.learning = function(){
        console.log("Learning English everyday");
    }
    this.cooking = function() {
        console.log("Help people cook well");
    }
}
var Jane = new Girl("reaing book","USA", "Counting Stars","Eminem");


//boy//

function Boy(Age,Sport,Job) {
    this.Age= Age;
    this.Sport = Sport;
    this.Job= Job;
    this.hobby = function() {
        console.log("Playing game");
    }
    this.dream = function () {
        console.log("Winning lottery");
    }
}
var John = new Boy(23,"Soccer","Nurse");