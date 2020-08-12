package com.company;

interface Iterator {
    boolean hasNext();
    Object next();
}


interface Container {
    Iterator getIterator();
}

class PlaceRepository implements Container {
    public String city[] = {"İstanbul" , "İzmir" ,"Eskişehir" , "Ankara"};

    @Override
    public Iterator getIterator() {
        return new PlaceIterator();
    }

    private class PlaceIterator implements Iterator {

        int index;

        @Override
        public boolean hasNext() {

            if(index < city.length){
                return true;
            }
            return false;
        }

        @Override
        public Object next() {

            if(this.hasNext()){
                return city[index++];
            }
            return null;
        }
    }
}

public class IteratorPattern {

    public static void main(String[] args) {
        PlaceRepository cityRepository = new PlaceRepository();

        for(Iterator iter = cityRepository.getIterator(); iter.hasNext();){
            String name = (String)iter.next();
            System.out.println("Visited Place : " + name);
        }
    }
}
